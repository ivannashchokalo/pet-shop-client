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
  target?: string;
}

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
  const baseStyles =
    "flex items-center justify-center rounded-[20px] transition-colors duration-300";

  const variants = {
    primary: "bg-[#c7e0f6] hover:bg-[#9db4d3] focus-visible:bg-[#85a3c9]",

    secondary:
      "bg-transparent border border-[#85a3c9] hover:border-[#c7e0f6] hover:bg-[rgba(199,224,246,0.5)] focus-visible:border-[#c7e0f6] focus-visible:bg-[#c7e0f6]",
  };

  const classes = clsx(baseStyles, variants[variant], className);

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
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
