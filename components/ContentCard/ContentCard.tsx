import clsx from "clsx";
interface ContentCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function ContentCard({ children, className }: ContentCardProps) {
  return (
    <div
      className={clsx(
        "flex flex-col items-center mx-auto py-11 px-8 rounded-[20px] bg-[#fff] shadow-[0_2px_4px_0_rgba(50,63,80,0.1)] md:w-[450px]",
        className,
      )}
    >
      {children}
    </div>
  );
}
