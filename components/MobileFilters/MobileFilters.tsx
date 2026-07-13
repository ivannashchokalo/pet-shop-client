"use client";

import { useDropdown } from "@/hooks/useDropdown";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import clsx from "clsx";
import { useFilters } from "@/hooks/useFilters";
import IconButton from "../IconButton/IconButton";
import BreedSelect from "../BreedSelect/BreedSelect";
import SortTypeSelect from "../SortTypeSelect/SortTypeSelect";
import PriceSortSelect from "../PriceSortSelect/PriceSortSelect";
import AgeSortSelect from "../AgeSortSelect/AgeSortSelect";
import SexRadioGroup from "../SexRadioGroup/SexRadioGroup";
import PriceRangeFilter from "../PriceRangeFilter/PriceRangeFilter";
import { ClearFiltersButton } from "../ClearFiltersButton/ClearFiltersButton";

interface MobileFiltersProps {
  type: string;
}

export default function MobileFilters({ type }: MobileFiltersProps) {
  const { isOpen, setIsOpen, dropdownRef, closeDropdown } = useDropdown();
  const { data, breeds, sortBy } = useFilters(type);

  const labelStyles =
    "flex flex-col gap-4 font-medium text-[16px] text-[#151c26]";

  return (
    <div ref={dropdownRef} className="md:hidden relative mb-10">
      <Button
        onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
        className="h-[40px] w-[100%] gap-2 text-[16px]"
      >
        <Icon name="filter" className="fill-[#323f50]" />
        Filters
      </Button>

      <div
        className={clsx(
          " min-h-[700px",
          "absolute top-[50px] left-0 w-[325px] h-[760px] z-10",
          "bg-white pt-[80px] px-6 pb-6 rounded-[20px]",
          "shadow-[0_2px_12px_0_rgba(50,63,80,0.15)]",
          "transition-all duration-500 ease-out",
          isOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-[100%] pointer-events-none",
        )}
      >
        <IconButton
          onClick={closeDropdown}
          className="absolute top-6 right-6 p-[10px]"
        >
          <Icon name="cross" />
        </IconButton>
        <div className="flex items-center justify-between mb-12 pb-4 border-b border-[#bac9df]">
          <h2 className="font-semibold text-[24px] text-[#151c26] ">Filters</h2>
          <ClearFiltersButton />
        </div>

        <div className="flex flex-col gap-8">
          {data?.price && <PriceRangeFilter price={data.price} />}
          <SexRadioGroup />
          <label htmlFor="breeds" className={labelStyles}>
            Breeds <BreedSelect inputId="breeds" breeds={breeds} />
          </label>
          <label htmlFor="sortType" className={labelStyles}>
            Sorting <SortTypeSelect inputId="sortType" />
          </label>
          {sortBy === "price" && (
            <label htmlFor="priceOrder" className={labelStyles}>
              Sort order <PriceSortSelect inputId="priceOrder" />
            </label>
          )}
          {sortBy === "birthDate" && (
            <label htmlFor="ageOrder" className={labelStyles}>
              Sort order <AgeSortSelect inputId="ageOrder" />
            </label>
          )}
        </div>
      </div>
    </div>
  );
}
