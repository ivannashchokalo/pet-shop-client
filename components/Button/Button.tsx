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

// styles
const baseStyles =
  "flex items-center justify-center rounded-[20px] transition-colors duration-300 font-medium text-[#0c1118]";
const variants = {
  primary:
    "bg-[#c7e0f6] hover:bg-[#9db4d3] focus-visible:bg-[#85a3c9] active:bg-[#85a3c9] disabled:bg-[#e8eef5] disabled:text-[#9db4d3] disabled:cursor-not-allowed",

  secondary:
    "text-[var(--text-main)] bg-transparent border border-[#85a3c9] hover:border-[#c7e0f6] hover:bg-[rgba(199,224,246,0.5)] focus-visible:border-[#c7e0f6] focus-visible:bg-[#c7e0f6] active:bg-[#c7e0f6] disabled:bg-[#e8eef5] disabled:text-[#9db4d3] disabled:cursor-not-allowed",
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
  const classes = clsx(baseStyles, variants[variant], className);

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
