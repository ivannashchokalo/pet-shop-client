"use client";

import { fetchFilters } from "@/lib/api/client/animalsClient";
import { useQuery } from "@tanstack/react-query";

interface FiltersSidebarProps {
  type: string;
}

export default function FiltersSidebar({ type }: FiltersSidebarProps) {
  console.log(type);
  const { data } = useQuery({
    queryKey: ["filters", type],
    queryFn: () => fetchFilters(type),
  });
  return <aside>sideBar</aside>;
}
