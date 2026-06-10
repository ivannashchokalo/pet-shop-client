"use client";

import { fetchFilters } from "@/lib/api/client/animalsClient";
import { useQuery } from "@tanstack/react-query";
import BreedSelect from "../ BreedSelect/BreedSelect";
import SexRadioGroup from "../SexRadioGroup/SexRadioGroup";
import PriceSortSelect from "../PriceSortSelect/PriceSortSelect";
import AgeSortSelect from "../AgeSortSelect/AgeSortSelect";
import PriceRangeFilter from "../PriceFilter/PriceFilter";
import { useSearchParams } from "next/navigation";
import SortTypeSelect from "../SortTypeSelect/SortTypeSelect";

interface FiltersSidebarProps {
  type: string;
}

export default function FiltersSidebar({ type }: FiltersSidebarProps) {
  const searchParams = useSearchParams();
  const sortType = searchParams.get("sortType");

  const { data } = useQuery({
    queryKey: ["filters", type],
    queryFn: () => fetchFilters(type),
  });

  const breeds = data?.breeds ?? [];

  return (
    <aside style={{ width: "300px" }}>
      <BreedSelect breeds={breeds} />
      <SortTypeSelect />
      {sortType === "price" && <PriceSortSelect />}
      {sortType === "birthDate" && <AgeSortSelect />}
      <SexRadioGroup />
      {data?.price && <PriceRangeFilter price={data.price} />}
    </aside>
  );
}
