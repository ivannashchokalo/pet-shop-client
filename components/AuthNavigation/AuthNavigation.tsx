"use client";

import { logout } from "@/lib/api/client/auth";
import { useAuthStore } from "@/lib/stores/authStore";
import { useMutation } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import Modal from "../Modal/Modal";
import SignInForm from "../SignInForm/SignInForm";
import Button from "../Button/Button";

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
      <ul className="flex gap-[6px]">
        {/* {isAuthenticated ? (
          <li>
            <button type="button" onClick={() => mutate()} disabled={isPending}>
              {isPending ? "Logging out..." : "Logout"}
            </button>
          </li>
        ) : ( */}

        {!isAuthenticated && (
          <>
            <li>
              <Button
                // type="button"
                variant="secondary"
                className="h-[36px] min-w-[82px] py-[10px] px-4 font-medium text-[13px] tracking-[-0.02em] text-center text-[#323f50]"
                onClick={() => setIsLoginModalOpen(true)}
              >
                Sign in
              </Button>
              {/* <button type="button" onClick={() => setIsLoginModalOpen(true)}>
                Sign in
              </button> */}
            </li>
            <li>
              <Button
                // variant="primary"
                className="h-[36px] min-w-[82px] py-[10px] px-4 font-medium text-[13px] tracking-[-0.02em] text-center text-[#323f50]"
                href={`/sign-up?from=${encodeURIComponent(pathname)}`}
              >
                Sign up
              </Button>
              {/* <Link href={`/sign-up?from=${encodeURIComponent(pathname)}`}>
                Sign up
              </Link> */}
            </li>{" "}
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
