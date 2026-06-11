import clsx from "clsx";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={clsx(
        "mx-auto max-w-[430px] px-4",
        "md:max-w-[768px] md:px-8",
        "xl:max-w-[1440px] xl:px-20",
        className,
      )}
    >
      {children}
    </div>
  );
}
