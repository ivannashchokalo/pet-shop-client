"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";

interface ModalProps {
  children: React.ReactNode;
  onClose?: () => void;
  redirectPath?: string;
}
export default function Modal({ children, onClose, redirectPath }: ModalProps) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  // const close = onClose ?? (() => router.back()); - цей варіан кожен рендер створює нову фекцію () => router.back() іерезапускає юзЕф, який залежить від close

  // useCallback каже не створюй нову функцію,
  //поки dependencies не змінились
  const close = useCallback(() => {
    if (onClose) {
      onClose();
      return;
    }

    router.back();
  }, [onClose, router]);

  useEffect(() => {
    setMounted(true);
  }, []);

  //! або
  // if (typeof window === "undefined") {
  //   return null;
  // }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Escape") {
        close();
        // router.back();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [close]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) close();
    // router.back();
  };

  const handleModalClose = () => {
    close();
    if (redirectPath) {
      router.push(redirectPath);
    }
  };

  if (!mounted) return null; // нічого не рендеримо і не чіпаємо document.body, поки компонент не змонтується

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
