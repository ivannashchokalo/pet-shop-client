import Icon from "@/components/Icon/Icon";
import { fetchStatistics } from "@/lib/api/server/statisticsServer";
import Link from "next/link";

export default async function Animals() {
  const {
    dogsCount,
    catsCount,
    rodentsCount,
    birdsCount,
    happyOwnersCount,
    animalsAvailableCount,
  } = await fetchStatistics();

  const cardClass = "rounded-[20px] bg-[#c7e0f6]";
  const linkClass = "flex flex-col justify-between min-h-[280px] py-8 px-6";
  const iconClass = "mx-auto fill-[#323f50]";
  const cardTitleClass =
    "flex flex-col gap-[2px] font-semibold text-[40px] leading-[1.5] text-[#323f50]";
  const subtitleStyles =
    "font-medium text-[15px] leading-[1.4] tracking-[0.01em] text-[#576b86]";

  return (
    <>
      <div className="flex flex-col gap-4 mb-[50px] md:max-w-[740px]">
        <p className="text-[20px] font-medium leading-[1.5] text-[#aad2f2] md:text-[24px]">
          Find your companion
        </p>
        <h1 className="text-[32px] font-semibold leading-[1.5] text-[#151c26] md:text-[40px]">
          Every pet deserves a loving home
        </h1>
        <p className="mb-8 text-[16px] font-medium leading-[1.5] text-[#576b86] md:text-[20px]">
          Find your perfect companion from trusted breeders and shelters. All
          pets are health-checked, vaccinated, and ready for a loving home.
        </p>
        <ul className="flex items-center gap-8">
          <li className="flex items-center gap-4">
            <div className="w-[44px] h-[44px] flex items-center justify-center rounded-[10px] bg-[#c7e0f6]">
              <Icon name="star" className="stroke-[#323f50] fill-none" />
            </div>
            <p className="flex flex-col gap-2 font-medium text-[20px] leading-[1.5] text-[#000000]">
              {happyOwnersCount}{" "}
              <span className="font-normal text-[14px]">Happy Owners</span>
            </p>
          </li>
          <li className="flex items-center gap-4">
            <div className="w-[44px] h-[44px] flex items-center justify-center rounded-[10px] bg-[#c7e0f6]">
              <Icon name="check" className="fill-[#323f50]" />
            </div>
            <p className="flex flex-col gap-2 font-medium text-[20px] leading-[1.5] text-[#000000]">
              {animalsAvailableCount}
              <span className="font-normal text-[14px]">Animals Available</span>
            </p>
          </li>
        </ul>
      </div>
      <ul className="grid md:grid-cols-2 gap-6">
        <li className={cardClass}>
          <Link href="/animals/dog" className={linkClass}>
            <Icon name="dog" width={216} height={111} className={iconClass} />
            <h2 className={cardTitleClass}>
              Dogs <span className={subtitleStyles}>{dogsCount} Available</span>
            </h2>
          </Link>
        </li>
        <li className={cardClass}>
          <Link href="/animals/cat" className={linkClass}>
            <Icon name="cat" width={216} height={116} className={iconClass} />
            <h2 className={cardTitleClass}>
              Cats <span className={subtitleStyles}>{catsCount} Available</span>
            </h2>
          </Link>
        </li>
        <li className={cardClass}>
          <Link href="/animals/bird" className={linkClass}>
            <Icon
              name="hamster"
              width={200}
              height={110}
              className={iconClass}
            />
            <h2 className={cardTitleClass}>
              Rodents{" "}
              <span className={subtitleStyles}>{rodentsCount} Available</span>
            </h2>
          </Link>
        </li>
        <li className={cardClass}>
          <Link href="/animals/rodent" className={linkClass}>
            <Icon
              name="parrot"
              width={152}
              height={137}
              className={iconClass}
            />
            <h2 className={cardTitleClass}>
              Birds{" "}
              <span className={subtitleStyles}>{birdsCount} Available</span>
            </h2>
          </Link>
        </li>
      </ul>
    </>
  );
}
