"use client";

import Icon from "../Icon/Icon";
import IconButton from "../IconButton/IconButton";
import Link from "next/link";
import clsx from "clsx";
import { useLogout } from "@/hooks/useLogout";
import { useAuthStore } from "@/lib/stores/authStore";
import { useDropdown } from "@/hooks/useDropdown";
import { useThemeStore } from "@/lib/stores/themeStote";

// styles
const itemStyles = "flex items-center gap-4";
const textStyles = "font-medium text-4 leading-[1.5] text-center";

export default function MobileMenu() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const { logout, isPending } = useLogout();
  const { isOpen, setIsOpen, dropdownRef, closeDropdown } = useDropdown();
  const { theme, themeToggle } = useThemeStore();

  return (
    <div ref={dropdownRef} className="md:hidden">
      <IconButton
        onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
        className="h-[44px] w-[44px] p-[10px] hover:bg-[rgba(199,224,246,0.2)] focus-visible:bg-[rgba(199,224,246,0.2)]"
      >
        <Icon name="burger-menu" className="fill-[var(--icon-color)]" />
      </IconButton>
      <div
        className={clsx(
          "absolute top-[calc(100%+19px)] right-4 w-[255px] z-50",
          "bg-[var(--mobile-menu-bg)] pt-6 px-6 pb-6 rounded-b-[20px]",
          "shadow-[0_2px_12px_0_rgba(50,63,80,0.15)]",
          "transition-all duration-500 ease-out",
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-[-32px] pointer-events-none",
        )}
      >
        <div className="pb-[20px] border-b border-[#bac9df]">
          <IconButton className="justify-start w-full" onClick={themeToggle}>
            <Icon name="moon" className="mr-4 fill-[var(--mobile-menu-icon)]" />
            <span className={clsx("text-[var(--text-main)]", textStyles)}>
              Dark mode
            </span>
            {theme === "dark" ? (
              <Icon
                name="theme-switcher-mob-menu-dark"
                width={34}
                height={20}
                className="block ml-auto"
              />
            ) : (
              <Icon
                name="theme-switcher-mob-menu"
                width={34}
                height={20}
                className="block ml-auto"
              />
            )}
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
                  className="fill-transparent stroke-[var(--mobile-menu-icon)]"
                />
                <span className={clsx("text-[var(--text-main)]", textStyles)}>
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
                <Icon name="pow" className="stroke-[var(--mobile-menu-icon)]" />
                <span className={clsx("text-[var(--text-main)]", textStyles)}>
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
