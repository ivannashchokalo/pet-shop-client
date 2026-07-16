"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

// styles
const linkStyles =
  "px-[16px] py-[10px] rounded-[20px] transition-colors duration-200 ease-in-out hover:bg-[rgba(199,224,246,0.2)] focus-visible:bg-[rgba(199,224,246,0.2)]";
const textStyles =
  "inline-block font-normal text-4 leading-[1.25] text-[#323f50]";
const activeStyles = "border-b border-[#151c26] text-[#151c26]";

export default function HeaderNavList() {
  const pathname = usePathname();

  return (
    <ul className="hidden md:flex items-center gap-6">
      <li>
        <Link href="/animals" className={linkStyles}>
          <span
            className={clsx(
              textStyles,
              pathname.startsWith("/animals") && activeStyles,
            )}
          >
            Animals
          </span>
        </Link>
      </li>
      <li>
        <Link href="/about" className={linkStyles}>
          <span
            className={clsx(
              textStyles,
              pathname.startsWith("/about") && activeStyles,
            )}
          >
            About us
          </span>
        </Link>
      </li>
    </ul>
  );
}
