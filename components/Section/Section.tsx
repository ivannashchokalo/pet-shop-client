import clsx from "clsx";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function Section({ children, className }: SectionProps) {
  return (
    <section className={clsx("py-[70px] md:py-[50px]", className)}>
      {children}
    </section>
  );
}
