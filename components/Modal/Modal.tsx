"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
  redirectPath?: string;
}
export default function Modal({ children, onClose, redirectPath }: ModalProps) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Escape") {
        onClose();
        // router.back();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
    // router.back();
  };

  const handleModalClose = () => {
    onClose();
    if (redirectPath) {
      router.push(redirectPath);
    }
  };

  if (!mounted) return null;

  return createPortal(
    <div
      onClick={handleBackdropClick}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 999,
        backgroundColor: "rgba(46, 47, 66, 0.4)",
      }}
    >
      <div
        style={{
          padding: "40px 60px",
          backgroundColor: "silver",
          borderRadius: "12px",
        }}
      >
        <button type="button" onClick={handleModalClose}>
          Close
        </button>

        {children}
      </div>
    </div>,
    document.body,
  );
}
