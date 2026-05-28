"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SexRadioGroup() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const sex = searchParams.get("sex") || "";

  const handleSexChange = (value: string) => {
    const params = new URLSearchParams(searchParams);

    console.log(value);

    if (value) {
      params.set("sex", value);
    } else {
      params.delete("sex");
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          checked={sex === ""}
          onChange={() => handleSexChange("")}
        />
        All
      </label>

      <label>
        <input
          type="radio"
          checked={sex === "male"}
          onChange={() => handleSexChange("male")}
        />
        Male
      </label>

      <label>
        <input
          type="radio"
          checked={sex === "female"}
          onChange={() => handleSexChange("female")}
        />
        Female
      </label>
    </div>
  );
}
