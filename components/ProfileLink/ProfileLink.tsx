"use client";

import { useAuthStore } from "@/lib/stores/authStore";
import IconButton from "../IconButton/IconButton";
import Icon from "../Icon/Icon";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function ProfileLink() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const pathname = usePathname();

  return (
    <>
      {isAuthenticated && (
        <IconButton
          href="/profile"
          className="h-11 w-11 hover:bg-[rgba(199,224,246,0.2)] focus-visible:bg-[rgba(199,224,246,0.2)]"
          ariaLabel="Profile"
        >
          <Icon
            name="user"
            className={clsx(
              "stroke-[var(--icon-color)]",
              pathname === "/profile"
                ? "fill-[var(--icon-color)]"
                : "fill-transparent",
            )}
          />
        </IconButton>
      )}
    </>
  );
}
