"use client";
import { useAuthStore } from "@/lib/stores/authStore";
// import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Icon from "../Icon/Icon";
import IconButton from "../IconButton/IconButton";
import clsx from "clsx";

export default function FavoritesLink() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const user = useAuthStore((state) => state.user);
  const router = useRouter();
  const pathName = usePathname();

  const handleClick = () => {
    router.push("/favorites");
  };

  return (
    <>
      {isAuthenticated && (
        <IconButton
          onClick={handleClick}
          className="relative h-[44px] w-[44px] p-[10px] rounded-full transition-colors duration-300 ease-in-out hover:bg-[rgba(199,224,246,0.2)] focus-visible:bg-[rgba(199,224,246,0.2)]"
        >
          <Icon
            name="heart"
            className={clsx(
              "stroke-[#323F50]",
              pathName === "/favorites" ? "fill-[#323F50]" : "fill-none",
            )}
          />

          {isAuthenticated && (
            <span className="absolute top-0 right-0 flex h-[23px] w-[22px] items-center justify-center rounded-[100px] bg-[#c7e0f6] p-[5px] font-semibold text-[11px] tracking-[-0.02em] text-[#323f50]">
              {user?.favorites?.length}
            </span>
          )}
        </IconButton>
      )}
    </>
  );
}
