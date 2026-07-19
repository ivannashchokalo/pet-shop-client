import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { Metadata } from "next";
import AnimalDetailsClient from "./AnimalDetailsClient";
import { notFound } from "next/navigation";
import AnimalsByCategoryClient from "./AnimalsByCategoryClient";
import {
  serverFetchAnimalById,
  serverFetchAnimals,
  serverFetchFilters,
} from "@/lib/api/server/animalsServer";
import { DEFAULT_PET } from "@/constants/images";

interface Props {
  params: Promise<{
    slug: string[];
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const category = slug[0];
  const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1);

  if (slug.length === 1) {
    return {
      title: `${categoryTitle} for Sale`,
      description: `Browse ${categoryTitle.toLowerCase()} available for purchase.`,
    };
  }

  const id = slug[1];
  const animal = await serverFetchAnimalById(id);

  return {
    title: `${animal.name} | Animal Details`,
    description: "View detailed information about this animal.",
    openGraph: {
      title: animal.name,
      description: `${animal.name} is a ${animal.breed} available for purchase.`,
      url: `https://pet-shop-client-five.vercel.app/animals/${animal._id}`,
      images: [
        {
          url: animal.images?.[0] || DEFAULT_PET,
          width: 1200,
          height: 630,
          alt: animal.name,
        },
      ],
    },
  };
}

interface AnimalsProps {
  params: Promise<{ slug: string[] }>;
  searchParams: Promise<{
    page?: string;
    breed?: string;
    sex?: string;
    sortBy?: string;
    sortOrder?: string;
    search?: string;
    minPrice?: string;
    maxPrice?: string;
  }>;
}

export default async function AnimalsByCategory({
  params,
  searchParams,
}: AnimalsProps) {
  const queryClient = new QueryClient();
  const { slug } = await params;
  const category = slug[0];

  if (!["cat", "dog", "rodent", "bird"].includes(category)) return notFound();

  if (slug.length > 2) {
    notFound();
  }

  if (slug.length === 1) {
    const type = category;

    const {
      page: pageParam,
      breed = "",
      sex = "",
      sortBy = "",
      sortOrder = "",
      search = "",
      minPrice = "",
      maxPrice = "",
    } = await searchParams;

    const page = Number(pageParam) || 1;

    await queryClient.prefetchQuery({
      queryKey: [
        "animals",
        {
          page,
          type,
          breed,
          sex,
          sortOrder,
          search,
          minPrice,
          maxPrice,
        },
      ],
      queryFn: () =>
        serverFetchAnimals(
          page,
          type,
          breed,
          sex,
          sortBy,
          sortOrder,
          search,
          minPrice,
          maxPrice,
        ),
    });

    await queryClient.prefetchQuery({
      queryKey: ["filters", type],
      queryFn: () => serverFetchFilters(type),
    });

    return (
      <>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <AnimalsByCategoryClient />
        </HydrationBoundary>
      </>
    );
  }

  if (slug.length === 2) {
    const id = slug[1];

    await queryClient.prefetchQuery({
      queryKey: ["animal", id],
      queryFn: () => serverFetchAnimalById(id),
    });

    return (
      <HydrationBoundary state={dehydrate(queryClient)}>
        <AnimalDetailsClient />
      </HydrationBoundary>
    );
  }

  return notFound();
}
