import clsx from "clsx";

interface IconButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function IconButton({
  children,
  onClick,
  className,
  type = "button",
}: IconButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx("flex items-center justify-center", className)}
    >
      {children}
    </button>
  );
}
