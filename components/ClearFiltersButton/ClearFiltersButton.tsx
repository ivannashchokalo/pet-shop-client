"use client";

import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";

interface ClearFiltersButtonProps {
  className?: string;
}

export function ClearFiltersButton({ className }: ClearFiltersButtonProps) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <button
      type="button"
      onClick={() => router.push(pathname)}
      className={clsx(
        "font-medium text-[16px] text-[#9db4d3] hover:text-[#85a3c9] focus-visible:text-[#85a3c9]",
        className,
      )}
    >
      Clear all
    </button>
  );
}
