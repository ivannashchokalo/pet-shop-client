import Icon from "@/components/Icon/Icon";
import clsx from "clsx";

interface LoaderProps {
  className?: string;
  iconColor: string;
}

export default function Loader({ className, iconColor }: LoaderProps) {
  return (
    <div className={clsx("flex items-center justify-center gap-3", className)}>
      <Icon name="paw" className={clsx("animate-paw", iconColor)} />
      <Icon name="paw" className={clsx("animate-paw delay-500", iconColor)} />
    </div>
  );
}
