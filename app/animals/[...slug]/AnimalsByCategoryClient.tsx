"use client";

import AnimalsList from "@/components/AnimalsList/AnimalsList";
import Filters from "@/components/Filters/Filters";
import MobileFilters from "@/components/MobileFilters/MobileFilters";
import Pagination from "@/components/Pagination/Pagination";
import { fetchAnimals } from "@/lib/api/client/animalsClient";
import { useQuery } from "@tanstack/react-query";
import {
  useParams,
  usePathname,
  useSearchParams,
  useRouter,
} from "next/navigation";

export default function AnimalsByCategoryClient() {
  const searchParams = useSearchParams();
  const { slug } = useParams<{ slug: string[] }>();
  const router = useRouter();
  const pathname = usePathname();
  const type = slug[0];
  const page = Number(searchParams.get("page")) || 1;
  const search = searchParams.get("search") || "";
  const breed = searchParams.get("breed") || "";
  const sex = searchParams.get("sex") || "";
  const sortBy = searchParams.get("sortBy") || "";
  const sortOrder = searchParams.get("sortOrder") || "";
  const minPrice = searchParams.get("minPrice") || "";
  const maxPrice = searchParams.get("maxPrice") || "";

  const { data } = useQuery({
    queryKey: [
      "animals",
      { page, type, breed, sex, sortBy, sortOrder, search, minPrice, maxPrice },
    ],
    queryFn: () =>
      fetchAnimals(
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
    refetchOnMount: false,
  });

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", String(page));

    router.push(`${pathname}?${params.toString()}`);
  };

  const animals = data?.animals ?? [];
  const totalPages = data?.totalPages ?? 0;

  return (
    <>
      <Filters type={type} />
      <MobileFilters type={type} />
      {animals.length > 0 && <AnimalsList animals={animals} />}
      {totalPages > 1 && (
        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
}
