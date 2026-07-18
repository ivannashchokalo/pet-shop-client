import Loader from "@/components/Loader/Loader";

export default function Loading() {
  return (
    <Loader
      className="absolute top-[30%] left-1/2 -translate-x-1/2"
      iconColor="fill-[var(--page-loader-color)]"
    />
  );
}
