import Link from "next/link";
import clsx from "clsx";

interface IconButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  target?: string;
  disabled?: boolean;
}

export default function IconButton({
  children,
  href,
  onClick,
  className,
  type = "button",
  target,
  disabled,
}: IconButtonProps) {
  const classes = clsx("flex items-center justify-center", className);

  if (href) {
    return (
      <Link href={href} target={target} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
