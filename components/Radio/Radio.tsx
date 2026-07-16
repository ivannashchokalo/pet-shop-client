"use client";
import clsx from "clsx";
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
        className={clsx(
          "flex h-6 w-6 items-center justify-center rounded-full border-[3px]",
          field.checked
            ? "border-[var(--border-secondary)]"
            : "border-[var(--border-placeholder)]",
        )}
      >
        {field.checked && (
          <div className="h-3 w-3 rounded-full bg-[var(--bg-accent)]" />
        )}
      </div>

      <span>{label}</span>
    </label>
  );
}
