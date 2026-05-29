"use client";

import { SelectOption } from "@/types/selectOptions";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Select from "react-select";

export default function AgeSortSelect() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const sortBy = searchParams.get("sortBy");
  const sortOrder = searchParams.get("sortOrder") || "";

  const options: SelectOption[] = [
    {
      value: "",
      label: "Sort by age",
    },
    {
      value: "desc",
      label: "Youngest First",
    },
    {
      value: "asc",
      label: "Oldest First",
    },
  ];

  const selectedOption =
    sortBy === "birthDate"
      ? (options.find((option) => option.value === sortOrder) ?? options[0])
      : options[0];

  const handleSortChange = (value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("sortBy", "birthDate");
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
      onChange={(option) => handleSortChange(option?.value || "")}
    />
  );
}
