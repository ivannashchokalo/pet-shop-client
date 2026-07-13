import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import ProfilePageClient from "./ProfilePageClient";
import { fetchUserRequestsServer } from "@/lib/api/server/requestsServer";
import Section from "@/components/Section/Section";
import Container from "@/components/Container/Container";

export default async function ProfilePage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["user-requests"],
    queryFn: fetchUserRequestsServer,
  });

  return (
    <Section>
      <Container>
        <h1 className="sr-only">Profile</h1>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <ProfilePageClient />
        </HydrationBoundary>
      </Container>
    </Section>
  );
}
