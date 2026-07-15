"use client";

import { AnimalSex } from "@/types/animal";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SexRadioGroup() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const sex = searchParams.get("sex") || "";

  const handleSexChange = (value: AnimalSex | "") => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("sex", value);
    } else {
      params.delete("sex");
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <label className="flex cursor-pointer items-center gap-3 group">
        <input
          type="radio"
          checked={sex === ""}
          onChange={() => handleSexChange("")}
          className="sr-only"
        />

        <div
          className={`flex h-5 w-5 items-center justify-center rounded-full border-[3px] group-hover:border-[#aad2f2] ${
            sex === "" ? "border-[#aad2f2]" : "border-[#a2a2a2]"
          }`}
        >
          {sex === "" && <div className="h-2 w-2 rounded-full bg-[#aad2f2]" />}
        </div>

        <span className="font-medium text-[16px] text-[#151c26]">All</span>
      </label>

      <label className="flex cursor-pointer items-center gap-3 group">
        <input
          type="radio"
          checked={sex === "male"}
          onChange={() => handleSexChange("male")}
          className="sr-only"
        />

        <div
          className={`flex h-5 w-5 items-center justify-center rounded-full border-[3px] group-hover:border-[#aad2f2] ${
            sex === "male" ? "border-[#aad2f2]" : "border-[#a2a2a2]"
          }`}
        >
          {sex === "male" && (
            <div className="h-2 w-2 rounded-full bg-[#aad2f2]" />
          )}
        </div>

        <span className="font-medium text-[16px] text-[#151c26]">Male</span>
      </label>

      <label className="flex cursor-pointer items-center gap-3 group">
        <input
          type="radio"
          checked={sex === "female"}
          onChange={() => handleSexChange("female")}
          className="sr-only"
        />

        <div
          className={`flex h-5 w-5 items-center justify-center rounded-full border-[3px] group-hover:border-[#aad2f2] ${
            sex === "female" ? "border-[#aad2f2]" : "border-[#a2a2a2]"
          }`}
        >
          {sex === "female" && (
            <div className="h-2 w-2 rounded-full bg-[#aad2f2]" />
          )}
        </div>

        <span className="font-medium text-[16px] text-[#151c26]">Female</span>
      </label>
    </div>
  );
}
