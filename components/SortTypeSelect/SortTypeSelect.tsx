"use strict";

import { SelectOption } from "@/types/selectOptions";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Select from "react-select";

interface SortTypeSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SortTypeSelect({
  value,
  onChange,
}: SortTypeSelectProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  // const sortType = searchParams.get("sortType") || "";

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
    options.find((option) => option.value === value) ?? options[0];

  const handleSortTypeChange = (value: string) => {
    onChange(value);

    const params = new URLSearchParams(searchParams);

    params.delete("sortBy");
    params.delete("sortOrder");

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <Select
      options={options}
      value={selectedOption}
      // onChange={(option) => handleSortTypeChange(option ? option.value : "")}
      onChange={(option) => handleSortTypeChange(option?.value ?? "")}
    />
  );
}
