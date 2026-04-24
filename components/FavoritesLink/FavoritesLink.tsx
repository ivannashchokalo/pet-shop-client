"use client";
import { useAuthStore } from "@/stores/authStore";
import Link from "next/link";

export default function FavoritesLink() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const user = useAuthStore((state) => state.user);

  return (
    <Link href="/favorites" style={{ marginLeft: "auto", marginRight: 30 }}>
      ❤️ {isAuthenticated && user?.favorites?.length}
    </Link>
  );
}
