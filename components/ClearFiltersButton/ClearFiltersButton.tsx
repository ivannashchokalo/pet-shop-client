"use client";

import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";

interface ClearFiltersButtonProps {
  className?: string;
}

export function ClearFiltersButton({ className }: ClearFiltersButtonProps) {
  const router = useRouter();
  const pathname = usePathname();

  const clearFilters = () => {
    router.push(pathname);
  };

  return (
    <button
      onClick={clearFilters}
      className={clsx(
        "font-medium text-[16px]]text-[#9db4d3] hover:text-[#85a3c9] focus-visible:text-[#85a3c9]",
        className,
      )}
    >
      Clear all
    </button>
  );
}
