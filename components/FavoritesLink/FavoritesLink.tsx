"use client";
import { useAuthStore } from "@/lib/stores/authStore";
// import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Modal from "../Modal/Modal";
import SignInForm from "../SignInForm/SignInForm";

export default function FavoritesLink() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const user = useAuthStore((state) => state.user);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    if (!isAuthenticated) {
      setIsLoginModalOpen(true);
      return;
    }

    router.push("/favorites");
  };

  return (
    <>
      <button
        onClick={handleClick}
        style={{ marginLeft: "auto", marginRight: 20 }}
      >
        ❤️ {isAuthenticated && user?.favorites?.length}
      </button>

      {isLoginModalOpen && (
        <Modal onClose={() => setIsLoginModalOpen(false)}>
          <SignInForm
            onModalClose={() => setIsLoginModalOpen(false)}
            fromPath="/favorites"
          />
        </Modal>
      )}
    </>
  );
}
