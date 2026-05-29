"use client";

import { SelectOption } from "@/types/selectOptions";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Select from "react-select";

const options: SelectOption[] = [
  {
    value: "",
    label: "Sort by price",
  },
  {
    value: "asc",
    label: "Price: Low to High",
  },
  {
    value: "desc",
    label: "Price: High to Low",
  },
];

export default function PriceSortSelect() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const sortOrder = searchParams.get("sortOrder") || "";

  const selectedOption =
    options.find((option) => option.value === sortOrder) ?? null;

  const handleSortChange = (value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("sortBy", "price");
      params.set("sortOrder", value);
    } else {
      params.delete("sortBy");
      params.delete("sortOrder");
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <Select
      options={options}
      value={selectedOption}
      onChange={(option) => handleSortChange(option ? option.value : "")}
      //   placeholder="Sort by price"
      //   isClearable
    />
  );
}
