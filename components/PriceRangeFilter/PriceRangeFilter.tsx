"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Range, getTrackBackground } from "react-range";
import { useDebouncedCallback } from "use-debounce";
import Icon from "../Icon/Icon";

interface PriceRange {
  min: number;
  max: number;
}

interface PriceRangeFilterProps {
  price: PriceRange;
}

export default function PriceRangeFilter({ price }: PriceRangeFilterProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [values, setValues] = useState([
    Number(searchParams.get("minPrice")) || price.min,
    Number(searchParams.get("maxPrice")) || price.max,
  ]);

  const updateUrl = useDebouncedCallback((values: number[]) => {
    const params = new URLSearchParams(searchParams);

    params.set("minPrice", String(values[0]));
    params.set("maxPrice", String(values[1]));

    params.delete("page");

    router.push(`${pathname}?${params.toString()}`);
  }, 500);

  const handlePriceChange = (values: number[]) => {
    setValues(values);

    updateUrl(values);
  };

  return (
    <div className="px-3 md:w-[430px]">
      <Range
        values={values}
        step={10}
        min={price.min}
        max={price.max}
        onChange={handlePriceChange}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "9px",
              width: "100%",
              borderRadius: "9px",

              background: getTrackBackground({
                values,
                colors: [
                  "var(--price-range-bg)",
                  "#aad2f2",
                  "var(--price-range-bg)",
                ],
                min: price.min,
                max: price.max,
              }),
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props, index }) => {
          const { key, ...restProps } = props;

          return (
            <div
              key={key}
              {...restProps}
              style={props.style}
              className="relative flex items-center justify-center "
            >
              <div className="absolute bottom-[10px] left-[50%] mb-3 translate-x-[-50%]">
                <div className="relative">
                  <Icon
                    name="price-range"
                    width={50}
                    height={40}
                    className="fill-[var(--price-range-bg)]"
                  />

                  <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-65%] flex items-center justify-center font-medium text-[14px] text-[#7793b7]">
                    {values[index]}
                  </span>
                </div>
              </div>
              <div className="h-5 w-5 rounded-full bg-[#aad2f2] shadow-[0_0_8px_0_rgba(50,63,80,0.25)]" />
            </div>
          );
        }}
      />
    </div>
  );
}
