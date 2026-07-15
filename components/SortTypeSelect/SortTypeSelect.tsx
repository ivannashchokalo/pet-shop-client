"use client";

import { SelectOption } from "@/types/selectOptions";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Select from "react-select";
import { selectStyles } from "../selectStyles/selectStyles";
import DropdownIndicator from "../indicators/DropdownIndicator";
import ClearIndicator from "../indicators/ClearIndicator";
import Option from "../indicators/Option";

interface SortTypeSelectProps {
  inputId: string;
}

export default function SortTypeSelect({ inputId }: SortTypeSelectProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const sortBy = searchParams.get("sortBy") || "";

  const options: SelectOption[] = [
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

  const handleSortTypeChange = (option: SelectOption | null) => {
    const params = new URLSearchParams(searchParams);

    params.delete("sortOrder");

    if (option) {
      params.set("sortBy", option.value);
    } else {
      params.delete("sortBy");
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <Select<SelectOption, false>
      styles={selectStyles}
      inputId={inputId}
      options={options}
      value={selectedOption}
      placeholder="Choose sorting"
      isClearable
      onChange={handleSortTypeChange}
      components={{
        DropdownIndicator,
        ClearIndicator,
        Option,
      }}
      isSearchable={false}
    />
  );
}
