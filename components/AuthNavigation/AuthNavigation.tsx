"use client";

import { logout } from "@/lib/api/client/auth";
import { useAuthStore } from "@/lib/stores/authStore";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import Modal from "../Modal/Modal";
import SignInForm from "../SignInForm/SignInForm";

export default function AuthNavigation() {
  const router = useRouter();
  const pathname = usePathname();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const clearIsAuthenticated = useAuthStore(
    (state) => state.clearIsAuthenticated,
  );
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const { mutate, isPending } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      clearIsAuthenticated();
      router.replace("/sign-in");
      router.refresh();
    },
    onError: () => {
      toast.error("Logout failed");
    },
  });
  return (
    <>
      <ul style={{ display: "flex", gap: 20 }}>
        {isAuthenticated ? (
          <li>
            <button type="button" onClick={() => mutate()} disabled={isPending}>
              {isPending ? "Logging out..." : "Logout"}
            </button>
          </li>
        ) : (
          <>
            <li>
              <button type="button" onClick={() => setIsLoginModalOpen(true)}>
                Sign in
              </button>
            </li>
            <li>
              <Link href={`/sign-up?from=${encodeURIComponent(pathname)}`}>
                Sign up
              </Link>
            </li>
          </>
        )}
      </ul>
      {isLoginModalOpen && (
        <Modal onClose={() => setIsLoginModalOpen(false)}>
          <SignInForm onModalClose={() => setIsLoginModalOpen(false)} />
        </Modal>
      )}
    </>
  );
}
