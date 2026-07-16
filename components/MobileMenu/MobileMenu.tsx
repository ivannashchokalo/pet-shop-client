"use client";

import Icon from "../Icon/Icon";
import IconButton from "../IconButton/IconButton";
import Link from "next/link";
import clsx from "clsx";
import { useLogout } from "@/hooks/useLogout";
import { useAuthStore } from "@/lib/stores/authStore";
import { useDropdown } from "@/hooks/useDropdown";

// styles
const itemStyles = "flex items-center gap-4";
const textStyles = "font-medium text-4 leading-[1.5] text-center";

export default function MobileMenu() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const { logout, isPending } = useLogout();
  const { isOpen, setIsOpen, dropdownRef, closeDropdown } = useDropdown();

  return (
    <div ref={dropdownRef} className="md:hidden">
      <IconButton
        onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
        className="h-[44px] w-[44px] p-[10px]"
      >
        <Icon name="burger-menu" className="fill-[#323f50]" />
      </IconButton>
      <div
        className={clsx(
          "absolute top-[calc(100%+19px)] right-4 w-[255px] z-10",
          "bg-white pt-6 px-6 pb-6 rounded-b-[20px]",
          "shadow-[0_2px_12px_0_rgba(50,63,80,0.15)]",
          "transition-all duration-500 ease-out",
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-[-32px] pointer-events-none",
        )}
      >
        <div className="pb-[20px] border-b border-[#bac9df]">
          <IconButton className="justify-start w-full">
            <Icon name="moon" className="mr-4 fill-[#323f50]" />
            <span className={clsx("text-[#151c26]", textStyles)}>
              Dark mode
            </span>
            <Icon
              name="theme-switcher-mob-menu"
              width={34}
              height={20}
              className="block ml-auto"
            />
          </IconButton>
        </div>
        <nav>
          <ul
            className={clsx(
              "flex flex-col gap-[20px] pt-[20px]",
              isAuthenticated && " pb-[20px] border-b border-[#bac9df]",
            )}
          >
            <li>
              <Link
                href="/about"
                className={itemStyles}
                onClick={closeDropdown}
              >
                <Icon
                  name="user-menu"
                  className="fill-transparent stroke-[#323F50]"
                />
                <span className={clsx("text-[#151c26]", textStyles)}>
                  About us
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/animals"
                className={itemStyles}
                onClick={closeDropdown}
              >
                <Icon name="pow" className="stroke-[#323F50]" />
                <span className={clsx("text-[#151c26]", textStyles)}>
                  Animals
                </span>
              </Link>
            </li>
          </ul>
        </nav>
        {isAuthenticated && (
          <IconButton
            className="justify-start gap-4 mt-[20px] w-full"
            onClick={() => {
              logout();
              closeDropdown();
            }}
            disabled={isPending}
          >
            <Icon name="logout" className="fill-transparent stroke-[#ef7d7d]" />
            <span className={clsx("text-[#ef7d7d]", textStyles)}>Logout</span>
          </IconButton>
        )}
      </div>
    </div>
  );
}
