"use strict";

import { SelectOption } from "@/types/selectOptions";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Select from "react-select";

export default function SortTypeSelect() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const sortBy = searchParams.get("sortBy") || "";

  const options: SelectOption[] = [
    // {
    //   value: "",
    //   label: "Choose sorting",
    // },
    {
      value: "price",
      label: "Price",
    },
    {
      value: "birthDate",
      label: "Age",
    },
  ];

  const selectedOption =
    options.find((option) => option.value === sortBy) ?? null;

  const handleSortTypeChange = (value: string) => {
    const params = new URLSearchParams(searchParams);

    params.delete("sortOrder");

    if (value) {
      params.set("sortBy", value);
    } else {
      params.delete("sortBy");
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <Select
      options={options}
      value={selectedOption}
      placeholder="Choose sorting"
      isClearable
      onChange={(option) => handleSortTypeChange(option ? option.value : "")}
    />
  );
}
