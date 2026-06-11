"use client";

import { useAuthStore } from "@/lib/stores/authStore";
import IconButton from "../IconButton/IconButton";
import Icon from "../Icon/Icon";

// import Link from "next/link";

export default function ProfileLink() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <>
      {isAuthenticated && (
        <IconButton
          href="/profile"
          className="h-[44px] w-[44px] p-[10px]"
        >
          <Icon name="user" className="fill-transparent stroke-[#323F50]" />
        </IconButton>
        // <Link style={{ marginRight: 20 }} href="/profile">
        //   Profile
        // </Link>
      )}
    </>
  );
}
