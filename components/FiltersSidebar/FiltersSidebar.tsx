"use client";

import { fetchFilters } from "@/lib/api/client/animalsClient";
import { useQuery } from "@tanstack/react-query";
import BreedSelect from "../CustomSelect/BreedSelect";

interface FiltersSidebarProps {
  type: string;
}

export default function FiltersSidebar({ type }: FiltersSidebarProps) {
  const { data } = useQuery({
    queryKey: ["filters", type],
    queryFn: () => fetchFilters(type),
  });

  const breeds = data?.breeds ?? [];

  return (
    <aside>
      <BreedSelect breeds={breeds} />
    </aside>
  );
}
