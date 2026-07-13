import clsx from "clsx";
import { ReactNode } from "react";

interface ContentCardProps {
  children: ReactNode;
  className?: string;
}

export default function ContentCard({ children, className }: ContentCardProps) {
  return (
    <div
      className={clsx(
        "flex flex-col items-center mx-auto py-11 px-8 rounded-[20px] bg-[#fff] border-[#a2a2a2] shadow-[0_2px_4px_0_rgba(50,63,80,0.1)] md:w-[450px]",
        className,
      )}
    >
      {children}
    </div>
  );
}
