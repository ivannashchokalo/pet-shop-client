"use client";

import { useAuthStore } from "@/stores/authStore";
import Link from "next/link";

export default function ProfileLink() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <>
      {isAuthenticated && (
        <Link style={{ marginRight: 20 }} href="/profile">
          Profile
        </Link>
      )}
    </>
  );
}
