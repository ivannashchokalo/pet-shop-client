import clsx from "clsx";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function Section({ children, className }: SectionProps) {
  return <section className={clsx("py-6", className)}>{children}</section>;
}
