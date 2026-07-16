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
  const pathname = usePathname();

  return (
    <>
      {isAuthenticated && (
        <IconButton
          onClick={() => router.push("/favorites")}
          className="relative h-[44px] w-[44px] p-[10px] rounded-full transition-colors duration-300 ease-in-out hover:bg-[rgba(199,224,246,0.2)] focus-visible:bg-[rgba(199,224,246,0.2)]"
        >
          <Icon
            name="heart"
            className={clsx(
              "stroke-[#323F50]",
              pathname === "/favorites" ? "fill-[#323F50]" : "fill-none",
            )}
          />

          <span className="absolute top-0 right-0 flex h-[23px] w-[22px] items-center justify-center rounded-[100px] bg-[var(--bg-primary)] p-[5px] font-semibold text-[11px] tracking-[-0.02em] text-[var(--text-secondary)]">
            {user?.favorites?.length}
          </span>
        </IconButton>
      )}
    </>
  );
}
