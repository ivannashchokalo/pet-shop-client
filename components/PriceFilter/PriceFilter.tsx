"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Range, getTrackBackground } from "react-range";
import { useDebouncedCallback } from "use-debounce";

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
    <div>
      <h3>Price</h3>
      <p>
        {values[0]}$ - {values[1]}$
      </p>

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
              height: "6px",
              width: "100%",

              background: getTrackBackground({
                values,
                colors: ["#ddd", "#000", "#ddd"],
                min: price.min,
                max: price.max,
              }),
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => {
          const { key, ...restProps } = props;

          return (
            <div
              key={key}
              {...restProps}
              style={{
                ...props.style,
                height: "10px",
                width: "10px",
                borderRadius: "50%",
                backgroundColor: "#000",
              }}
            />
          );
        }}
      />
    </div>
  );
}
