"use client";

import { useAuthStore } from "@/lib/stores/authStore";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Modal from "../Modal/Modal";
import SignInForm from "../SignInForm/SignInForm";
import Button from "../Button/Button";
import { useLogout } from "@/hooks/useLogout";
import IconButton from "../IconButton/IconButton";
import Icon from "../Icon/Icon";

const AUTH_BUTTON_CLASS =
  "h-[36px] min-w-[82px] py-[10px] px-4 font-medium text-[13px] tracking-[-0.02em] text-center text-[#323f50] h-[36px] min-w-[82px] py-[10px] px-4 font-medium text-[13px] tracking-[-0.02em] text-center text-[#323f50]";

export default function AuthNavigation() {
  const pathname = usePathname();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const { logout, isPending } = useLogout();

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <>
      {!isAuthenticated && (
        <ul className="flex gap-[8px]">
          <li>
            <Button
              variant="secondary"
              className={AUTH_BUTTON_CLASS}
              onClick={() => setIsLoginModalOpen(true)}
            >
              Sign in
            </Button>
          </li>

          <li>
            <Button
              className={AUTH_BUTTON_CLASS}
              href={`/sign-up?from=${encodeURIComponent(pathname)}`}
            >
              Sign up
            </Button>
          </li>
        </ul>
      )}

      {isAuthenticated && (
        <IconButton
          className="p-[10px] hidden md:block rounded-full  transition-colors duration-300 ease-in-out hover:bg-[rgba(199,224,246,0.2)] focus-visible:bg-[rgba(199,224,246,0.2)]"
          onClick={logout}
          disabled={isPending}
        >
          <Icon name="logout" className="fill-transparent stroke-[#323f50]" />
        </IconButton>
      )}

      {isLoginModalOpen && (
        <Modal onClose={() => setIsLoginModalOpen(false)}>
          <SignInForm onModalClose={() => setIsLoginModalOpen(false)} />
        </Modal>
      )}
    </>
  );
}
