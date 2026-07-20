"use client";

import { SelectOption } from "@/types/selectOptions";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Select from "react-select";
import { selectStyles } from "../selectStyles/selectStyles";
import DropdownIndicator from "../indicators/DropdownIndicator";
import ClearIndicator from "../indicators/ClearIndicator";
import Option from "../indicators/Option";

interface AgeSortSelectProps {
  inputId: string;
}

export default function AgeSortSelect({ inputId }: AgeSortSelectProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const sortBy = searchParams.get("sortBy");
  const sortOrder = searchParams.get("sortOrder") || "";

  const options = [
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
      ? (options.find((option) => option.value === sortOrder) ?? null)
      : null;

  const handleSortChange = (sortOrder: SelectOption | null) => {
    const params = new URLSearchParams(searchParams);

    if (sortOrder) {
      params.set("sortBy", "birthDate");
      params.set("sortOrder", sortOrder.value);
    } else {
      params.delete("sortBy");
      params.delete("sortOrder");
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <Select<SelectOption, false>
      styles={selectStyles}
      inputId={inputId}
      options={options}
      placeholder="Choose order"
      isClearable
      value={selectedOption}
      onChange={handleSortChange}
      components={{
        DropdownIndicator,
        ClearIndicator,
        Option,
      }}
      isSearchable={false}
    />
  );
}
