"use client";
import { useAuthStore } from "@/lib/stores/authStore";
// import Link from "next/link";
import { useRouter } from "next/navigation";
import Icon from "../Icon/Icon";
import IconButton from "../IconButton/IconButton";

// import { useState } from "react";
// import Modal from "../Modal/Modal";
// import SignInForm from "../SignInForm/SignInForm";

export default function FavoritesLink() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const user = useAuthStore((state) => state.user);
  // const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    // if (!isAuthenticated) {
    //   setIsLoginModalOpen(true);
    //   return;
    // }

    router.push("/favorites");
  };

  return (
    <>
      {isAuthenticated && (
        <IconButton
          onClick={handleClick}
          className="relative h-[44px] w-[44px] p-[10px]"
        >
          <Icon name="heart" className="fill-transparent stroke-[#323F50]" />

          {isAuthenticated && (
            <span className="absolute top-0 right-0 flex h-[23px] w-[22px] items-center justify-center rounded-[100px] bg-[#c7e0f6] p-[5px] font-semibold text-[11px] tracking-[-0.02em] text-[#323f50]">
              {user?.favorites?.length}
            </span>
          )}
        </IconButton>
      )}

      {/* {isLoginModalOpen && (
        <Modal onClose={() => setIsLoginModalOpen(false)}>
          <SignInForm
            onModalClose={() => setIsLoginModalOpen(false)}
            fromPath="/favorites"
          />
        </Modal>
      )} */}
    </>
  );
}
