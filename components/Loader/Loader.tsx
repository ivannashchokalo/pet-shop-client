import Icon from "@/components/Icon/Icon";
import clsx from "clsx";

interface LoaderProps {
  className?: string;
}

export default function Loader({ className }: LoaderProps) {
  return (
    <div className={clsx("flex items-center justify-center gap-3", className)}>
      <Icon name="paw" className="animate-paw fill-[#c7e0f6]" />

      <Icon name="paw" className="animate-paw delay-500 fill-[#c7e0f6]" />
    </div>
  );
}
