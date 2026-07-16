"use client";

import { useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import ContentCard from "../ContentCard/ContentCard";
import Icon from "../Icon/Icon";
import IconButton from "../IconButton/IconButton";

interface ModalProps {
  children: React.ReactNode;
  onClose?: () => void;
  redirectPath?: string;
}
export default function Modal({ children, onClose, redirectPath }: ModalProps) {
  const router = useRouter();

  const close = useCallback(() => {
    if (onClose) {
      onClose();
      return;
    }

    router.back();
  }, [onClose, router]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Escape") {
        close();
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
  };

  const handleModalClose = () => {
    close();
    if (redirectPath) {
      router.push(redirectPath);
    }
  };

  return createPortal(
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-[rgba(46,47,66,0.4)]"
    >
      <ContentCard className="relative w-[350px]">
        <IconButton
          type="button"
          onClick={handleModalClose}
          className="absolute top-4 right-4"
        >
          <Icon name="cross" className="fill-[#323f50]" />
        </IconButton>
        {children}
      </ContentCard>
    </div>,
    document.body,
  );
}
