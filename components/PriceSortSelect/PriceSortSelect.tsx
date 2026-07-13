"use client";

import { SelectOption } from "@/types/selectOptions";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Select from "react-select";
import { selectStyles } from "../selectStyles/selectStyles";
import DropdownIndicator from "../indicators/DropdownIndicator";
import ClearIndicator from "../indicators/ClearIndicator";
import Option from "../indicators/Option";

interface PriceSortSelectProps {
  inputId: string;
}

export default function PriceSortSelect({ inputId }: PriceSortSelectProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const sortOrder = searchParams.get("sortOrder") || "";

  const options: SelectOption[] = [
    {
      value: "asc",
      label: "Price: Low to High",
    },
    {
      value: "desc",
      label: "Price: High to Low",
    },
  ];

  const selectedOption =
    options.find((option) => option.value === sortOrder) ?? null;

  const handleSortChange = (value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("sortOrder", value);
    } else {
      params.delete("sortOrder");
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <Select<SelectOption, false>
      styles={selectStyles}
      inputId={inputId}
      options={options}
      placeholder="Sort by price"
      isClearable
      value={selectedOption}
      onChange={(option) => handleSortChange(option ? option.value : "")}
      components={{
        DropdownIndicator,
        ClearIndicator,
        Option,
      }}
      isSearchable={false}
    />
  );
}
