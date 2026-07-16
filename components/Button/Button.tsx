import Link from "next/link";
import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  target?: React.HTMLAttributeAnchorTarget;
}

const BASE_STYLES =
  "flex items-center justify-center rounded-[20px] transition-colors duration-300 font-medium text-[#0c1118]";
const VARIANTS = {
  primary:
    "bg-[var(--bg-primary)] hover:bg-[#9db4d3] focus-visible:bg-[#85a3c9] active:bg-[#85a3c9] disabled:bg-[#e8eef5] disabled:text-[var(--text-disabled)] disabled:cursor-not-allowed",

  secondary:
    "bg-transparent border border-[var(--border-primary)] hover:border-[var(--border-light)] hover:bg-[rgba(199,224,246,0.5)] focus-visible:border-[var(--border-light)] focus-visible:bg-[var(--bg-primary)] active:bg-[var(--bg-primary)] disabled:bg-[#e8eef5] disabled:text-[var(--text-disabled)] disabled:cursor-not-allowed",
};

export default function Button({
  children,
  href,
  variant = "primary",
  className,
  onClick,
  type = "button",
  disabled,
  target,
}: ButtonProps) {
  const classes = clsx(BASE_STYLES, VARIANTS[variant], className);

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        className={classes}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
