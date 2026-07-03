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
        className={clsx("mx-auto fill-[#323f50]", iconClassName)}
      />

      <h2
        className={clsx(
          "flex flex-col gap-[2px] font-semibold leading-[1.5] text-[#323f50]",
          titleClassName,
        )}
      >
        {title}

        <span
          className={clsx(
            "font-medium text-[15px] leading-[1.4] tracking-[0.01em] text-[#576b86]",
            subtitleClassName,
          )}
        >
          {count} Available
        </span>
      </h2>
    </>
  );

  return (
    <li className={clsx("rounded-[20px] bg-[#c7e0f6]", cardClassName)}>
      {href ? (
        <Link
          href={href}
          className={clsx(
            "flex min-h-[280px] flex-col justify-between py-8 px-6",
            contentClassName,
          )}
        >
          {content}
        </Link>
      ) : (
        <div
          className={clsx(
            "flex min-h-[280px] flex-col justify-between py-8 px-6",
            contentClassName,
          )}
        >
          {content}
        </div>
      )}
    </li>
  );
}
