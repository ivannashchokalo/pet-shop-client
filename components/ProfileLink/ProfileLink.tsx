"use client";

import { useAuthStore } from "@/lib/stores/authStore";
import IconButton from "../IconButton/IconButton";
import Icon from "../Icon/Icon";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function ProfileLink() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const pathName = usePathname();
  console.log(pathName);

  return (
    <>
      {isAuthenticated && (
        <IconButton href="/profile" className="h-[44px] w-[44px] p-[10px]">
          <Icon
            name="user"
            className={clsx("fill-transparent stroke-[#323F50]")}
          />
        </IconButton>
      )}
    </>
  );
}
