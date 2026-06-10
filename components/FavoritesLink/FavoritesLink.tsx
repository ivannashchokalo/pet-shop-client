"use client";
import { useAuthStore } from "@/lib/stores/authStore";
// import Link from "next/link";
import { useRouter } from "next/navigation";
import Icon from "../Icon/Icon";
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
        <button
          onClick={handleClick}
          className="relative w-[44px] h-[44px] p-[10px]"
        >
          <Icon name="heart" className="fill-transparent stroke-[#323F50]" />
          {isAuthenticated && (
            <span className="absolute flex items-center justify-center top-0 right-0 w-[22px] h-[23px] rounded-[100px] bg-[#c7e0f6] p-[5px] font-semibold text-[11px] tracking-[-0.02em] text-[#323f50]">
              {user?.favorites?.length}
            </span>
          )}
        </button>
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
