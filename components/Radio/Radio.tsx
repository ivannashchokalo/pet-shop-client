"use client";
import { useField } from "formik";

interface RadioProps {
  name: string;
  value: string;
  label: string;
}

export default function Radio({ name, value, label }: RadioProps) {
  const [field] = useField({ name, type: "radio", value });

  return (
    <label className="flex cursor-pointer items-center gap-3">
      <input {...field} type="radio" value={value} className="sr-only" />

      <div
        className={`flex h-6 w-6 items-center justify-center rounded-full border-[3px] ${
          field.checked ? "border-[#aad2f2]" : "border-[#a2a2a2]"
        }`}
      >
        {field.checked && <div className="h-3 w-3 rounded-full bg-[#aad2f2]" />}
      </div>

      <span>{label}</span>
    </label>
  );
}
