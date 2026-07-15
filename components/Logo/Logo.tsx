import Icon from "@/components/Icon/Icon";
import clsx from "clsx";
import Link from "next/link";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Go to home page"
      className={clsx("inline-block", className)}
    >
      <Icon name="logo" className="fill-[#85a3c9]" width={42} height={40} />
    </Link>
  );
}
