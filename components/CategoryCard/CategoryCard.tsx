import clsx from "clsx";
import Link from "next/link";

import Icon from "@/components/Icon/Icon";

interface CategoryCardProps {
  title: string;
  count: number;
  icon: string;
  iconWidth: number;
  iconHeight: number;
  href?: string;
  cardClassName?: string;
  contentClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  iconClassName?: string;
}

const contentClass = "flex min-h-[280px] flex-col justify-between px-6 py-8";

export default function CategoryCard({
  title,
  count,
  icon,
  iconWidth,
  iconHeight,
  href,
  cardClassName,
  contentClassName,
  titleClassName,
  subtitleClassName,
  iconClassName,
}: CategoryCardProps) {
  const content = (
    <>
      <Icon
        name={icon}
        width={iconWidth}
        height={iconHeight}
        className={clsx("mx-auto fill-[var(--icon-category)]", iconClassName)}
      />

      <h2
        className={clsx(
          "flex flex-col gap-[2px] font-semibold text-[var(--text-main)]",
          titleClassName,
        )}
      >
        {title}

        <span
          className={clsx(
            "font-medium text-[15px] leading-[1.4] tracking-[0.01em] text-[var(--text-category)]",
            subtitleClassName,
          )}
        >
          {count} Available
        </span>
      </h2>
    </>
  );

  return (
    <li
      className={clsx(
        "rounded-[20px] bg-[var(--background-category)]",
        cardClassName,
      )}
    >
      {href ? (
        <Link href={href} className={clsx(contentClass, contentClassName)}>
          {content}
        </Link>
      ) : (
        <div className={clsx(contentClass, contentClassName)}>{content}</div>
      )}
    </li>
  );
}
