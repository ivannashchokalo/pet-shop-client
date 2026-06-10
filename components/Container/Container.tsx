import clsx from "clsx";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={clsx("mx-auto max-w-[430px] px-4", className)}>
      {children}
    </div>
  );
}
