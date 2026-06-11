interface IconProps {
  name: string;
  width?: number;
  height?: number;
  className?: string;
  ariaHidden?: boolean;
}

export default function Icon({
  name,
  width = 24,
  height = 24,
  className,
  ariaHidden = true,
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      aria-hidden={ariaHidden}
    >
      <use href={`/icons.svg#${name}`} />
    </svg>
  );
}
