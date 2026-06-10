"use strict";

import { SelectOption } from "@/types/selectOptions";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Select from "react-select";

export default function SortTypeSelect() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const sortType = searchParams.get("sortType") || "";

  const options: SelectOption[] = [
    {
      value: "",
      label: "Choose sorting",
    },
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
    options.find((option) => option.value === sortType) ?? options[0];

  const handleSortTypeChange = (value: string) => {
    const params = new URLSearchParams(searchParams);

    params.delete("sortBy");
    params.delete("sortOrder");

    if (value) {
      params.set("sortType", value);
    } else {
      params.delete("sortType");
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <Select
      options={options}
      value={selectedOption}
      onChange={(option) => handleSortTypeChange(option ? option.value : "")}
    />
  );
}
