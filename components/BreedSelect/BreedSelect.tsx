import { SelectOption } from "../../types/selectOptions";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Select from "react-select";
import { selectStyles } from "../selectStyles/selectStyles";
import DropdownIndicator from "../indicators/DropdownIndicator";
import ClearIndicator from "../indicators/ClearIndicator";
import MultiValueRemove from "../indicators/MultiValueRemove";
import Option from "../indicators/Option";
import MultiValue from "../indicators/MultiValue";

interface BreedSelectProps {
  breeds: string[];
  inputId: string;
}

export default function BreedSelect({ breeds, inputId }: BreedSelectProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const selectedBreeds = searchParams.get("breed")?.split(",") ?? [];

  const breedOptions: SelectOption[] = breeds.map((breed) => ({
    value: breed,
    label: breed,
  }));

  const selectedBreedOptions = breedOptions.filter((option) =>
    selectedBreeds.includes(option.value),
  );

  const handleBreedChange = (options: SelectOption[]) => {
    const params = new URLSearchParams(searchParams);

    if (options.length > 0) {
      params.set("breed", options.map((option) => option.value).join(","));
    } else {
      params.delete("breed");
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <Select
      styles={selectStyles}
      inputId={inputId}
      options={breedOptions}
      value={selectedBreedOptions}
      onChange={(options) =>
        handleBreedChange((options as SelectOption[]) ?? [])
      }
      isClearable
      isMulti
      isSearchable
      placeholder="Select breeds"
      components={{
        DropdownIndicator,
        ClearIndicator,
        MultiValueRemove,
        Option,
        MultiValue,
      }}
      hideSelectedOptions={false}
    />
  );
}
