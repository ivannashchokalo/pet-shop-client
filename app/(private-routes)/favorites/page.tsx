import Container from "@/components/Container/Container";
import Section from "@/components/Section/Section";
import FavoritesAnimalsClient from "./FavoritesAnimalsClient";
import {
  dehydrate,
  QueryClient,
  HydrationBoundary,
} from "@tanstack/react-query";
import { fetchFavoriteAnimalsServer } from "@/lib/api/server/usersServer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Favorite Animals | Pet Shop",
  description: "View and manage your favorite animals.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function FavoritesAnimals() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ["favoriteAnimals"],
    queryFn: fetchFavoriteAnimalsServer,
    initialPageParam: 1,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Section>
        <Container>
          <FavoritesAnimalsClient />
        </Container>
      </Section>
    </HydrationBoundary>
  );
}
