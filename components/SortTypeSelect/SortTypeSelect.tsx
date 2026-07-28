"use client";

import { SelectOption } from "@/types/selectOptions";
import Select from "react-select";
import { selectStyles } from "../selectStyles/selectStyles";
import DropdownIndicator from "../indicators/DropdownIndicator";
import ClearIndicator from "../indicators/ClearIndicator";
import Option from "../indicators/Option";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface SortTypeSelectProps {
  inputId: string;
  value: string;
  onChange: (value: string) => void;
}

export default function SortTypeSelect({
  inputId,
  value,
  onChange,
}: SortTypeSelectProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

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
    options.find((option) => option.value === value) ?? null;

  const handleSortTypeChange = (option: SelectOption | null) => {
    const params = new URLSearchParams(searchParams);

    if (option) {
      params.set("sortBy", option.value);
      onChange(option.value);
    } else {
      params.delete("sortBy");
      onChange("");
    }

    params.delete("sortOrder");

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
