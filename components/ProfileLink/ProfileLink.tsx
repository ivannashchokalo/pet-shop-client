"use client";

import { useAuthStore } from "@/lib/stores/authStore";
import IconButton from "../IconButton/IconButton";
import Icon from "../Icon/Icon";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function ProfileLink() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const pathName = usePathname();

  return (
    <>
      {isAuthenticated && (
        <IconButton
          href="/profile"
          className="h-[44px] w-[44px] p-[10px] rounded-full  transition-colors duration-300 ease-in-out hover:bg-[rgba(199,224,246,0.2)] focus-visible:bg-[rgba(199,224,246,0.2)]"
        >
          <Icon
            name="user"
            className={clsx(
              "stroke-[#323F50]",
              pathName === "/profile" ? "fill-[#323f50]" : "fill-transparent",
            )}
          />
        </IconButton>
      )}
    </>
  );
}
