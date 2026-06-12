import Icon from "@/components/Icon/Icon";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Icon name="logo" className="fill-[#85a3c9]" width={42} height={40} />
    </Link>
  );
}
