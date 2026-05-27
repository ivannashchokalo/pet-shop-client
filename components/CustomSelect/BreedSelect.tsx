import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Select from "react-select";

interface BreedSelectProps {
  breeds: string[];
}

interface BreedOption {
  value: string;
  label: string;
}

export default function BreedSelect({ breeds }: BreedSelectProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const breed = searchParams.get("breed")?.split(",") ?? [];

  const breedOptions: BreedOption[] = breeds.map((breed) => ({
    value: breed,
    label: breed,
  }));

  const selectedBreed = breedOptions.filter((option) =>
    breed.includes(option.value),
  );

  const handleBreedChange = (options: BreedOption[]) => {
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
      options={breedOptions}
      value={selectedBreed}
      onChange={(options) =>
        handleBreedChange((options as BreedOption[]) ?? [])
      }
      isClearable
      isMulti
      isSearchable
    />
  );
}
