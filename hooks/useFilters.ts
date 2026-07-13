"use client";

import { fetchFilters } from "@/lib/api/client/animalsClient";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

export function useFilters(type: string) {
  const searchParams = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";

  const { data } = useQuery({
    queryKey: ["filters", type],
    queryFn: () => fetchFilters(type),
  });

  const breeds = data?.breeds ?? [];

  return {
    data,
    breeds,
    sortBy,
  };
}
