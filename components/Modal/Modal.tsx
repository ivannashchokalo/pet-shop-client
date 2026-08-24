"use client";

import { useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import ContentCard from "../ContentCard/ContentCard";
import Icon from "../Icon/Icon";
import IconButton from "../IconButton/IconButton";
import clsx from "clsx";

interface ModalProps {
  children: React.ReactNode;
  onClose?: () => void;
  redirectPath?: string;
  className?: string;
}
export default function Modal({
  children,
  onClose,
  redirectPath,
  className,
}: ModalProps) {
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
      className="fixed top-0 left-0 z-[999] flex h-full w-full items-center justify-center overflow-y-auto bg-[rgba(46,47,66,0.4)]"
    >
      <ContentCard
        className={clsx("relative mx-auto my-4 w-[350px]", className)}
      >
        <IconButton
          type="button"
          onClick={handleModalClose}
          className="absolute top-4 right-4"
        >
          <Icon name="cross" className="fill-[var(--icon-color)]" />
        </IconButton>
        {children}
      </ContentCard>
    </div>,
    document.body,
  );
}
