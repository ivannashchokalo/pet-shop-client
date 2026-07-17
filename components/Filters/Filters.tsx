"use client";

import BreedSelect from "../BreedSelect/BreedSelect";
import SexRadioGroup from "../SexRadioGroup/SexRadioGroup";
import PriceSortSelect from "../PriceSortSelect/PriceSortSelect";
import AgeSortSelect from "../AgeSortSelect/AgeSortSelect";
import PriceRangeFilter from "../PriceRangeFilter/PriceRangeFilter";
import SortTypeSelect from "../SortTypeSelect/SortTypeSelect";
import { useFilters } from "@/hooks/useFilters";
import { ClearFiltersButton } from "../ClearFiltersButton/ClearFiltersButton";

interface FiltersProps {
  type: string;
}

export default function Filters({ type }: FiltersProps) {
  const { data, breeds, sortBy } = useFilters(type);

  return (
    <div className="hidden md:flex md:flex-col md:gap-6 md:h-[210px]">
      <div className="flex items-start gap-4 flex-wrap md:min-h-[115px] xl:min-h-0">
        <label htmlFor="breeds" className="sr-only">
          Breed
        </label>
        <BreedSelect inputId="breeds" breeds={breeds} />
        <label htmlFor="sortType" className="sr-only">
          Sort Type
        </label>
        <SortTypeSelect inputId="sortType" />
        {sortBy === "price" && (
          <>
            <label htmlFor="priceOrder" className="sr-only">
              Sort Order
            </label>
            <PriceSortSelect inputId="priceOrder" />
          </>
        )}
        {sortBy === "birthDate" && (
          <>
            <label htmlFor="ageOrder" className="sr-only">
              Sort Order
            </label>
            <AgeSortSelect inputId="ageOrder" />
          </>
        )}
      </div>

      <div className="flex flex-col gap-15">
        <SexRadioGroup />
        {data?.price && <PriceRangeFilter price={data.price} />}
      </div>
      <ClearFiltersButton className="self-end mt-auto" />
    </div>
  );
}
