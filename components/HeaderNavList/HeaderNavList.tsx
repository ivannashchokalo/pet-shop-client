"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderNavList() {
  const pathname = usePathname();

  const linkStyles = "px-[16px] py-[10px]";

  const textStyles =
    "inline-block font-normal text-4 leading-[1.25] text-[#323f50] transition-colors duration-200 hover:text-[#151c26] focus-visible:text-[#151c26]";

  const activeStyles = "border-b border-[#151c26] text-[#151c26]";

  return (
    <ul className="hidden md:flex items-center gap-6">
      <li>
        <Link href="/animals" className={linkStyles}>
          <span
            className={clsx(
              textStyles,
              pathname === "/animals" && activeStyles,
            )}
          >
            Animals
          </span>
        </Link>
      </li>

      <li>
        <Link href="/about" className={linkStyles}>
          <span
            className={clsx(textStyles, pathname === "/about" && activeStyles)}
          >
            About us
          </span>
        </Link>
      </li>
    </ul>
  );
}
