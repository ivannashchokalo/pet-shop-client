import Icon from "@/components/Icon/Icon";
import Link from "next/link";

export default function Animals() {
  const cardClass = "rounded-[20px] bg-[#c7e0f6]";
  const linkClass = "block py-8 px-6";
  const iconClass = "mx-auto mb-[28px] fill-[#323f50]";
  const cardTitleClass =
    "font-semibold text-[40px] leading-[1.5] text-[#323f50]";

  return (
    <>
      <div className="flex flex-col gap-4 mb-[50px] md:max-w-[740px]">
        <p className="text-[20px] font-medium leading-[1.5] text-[#aad2f2] md:text-[24px]">
          Find your companion
        </p>
        <h1 className="text-[32px] font-semibold leading-[1.5] text-[#151c26] md:text-[40px]">
          Every pet deserves a loving home
        </h1>
        <p className="text-[16px] font-medium leading-[1.5] text-[#576b86] md:text-[20px]">
          Find your perfect companion from trusted breeders and shelters. All
          pets are health-checked, vaccinated, and ready for a loving home.
        </p>
      </div>
      <ul className="grid md:grid-cols-2 gap-6">
        <li className={cardClass}>
          <Link href="/animals/dog" className={linkClass}>
            <Icon
              name="dog"
              width={216}
              height={111}
              className="mx-auto mb-[28px] fill-[#323f50]"
            />
            <h2 className="font-semibold text-[40px] leading-[1.5] tracking-[0em] text-[#323f50]">
              Dogs
            </h2>
          </Link>
        </li>
        <li className={cardClass}>
          <Link href="/animals/cat" className={linkClass}>
            <Icon
              name="cat"
              width={216}
              height={116}
              className="mx-auto mb-[28px] fill-[#323f50]"
            />
            <h2 className="font-semibold text-[40px] leading-[1.5] tracking-[0em] text-[#323f50]">
              Cats
            </h2>
          </Link>
        </li>
        <li className={cardClass}>
          <Link href="/animals/bird" className={linkClass}>
            <Icon
              name="hamster"
              width={200}
              height={110}
              className="mx-auto mb-[28px] fill-[#323f50]"
            />
            <h2 className="font-semibold text-[40px] leading-[1.5] tracking-[0em] text-[#323f50]">
              Rodents
            </h2>
          </Link>
        </li>
        <li className={cardClass}>
          <Link href="/animals/rodent" className={linkClass}>
            <Icon
              name="parrot"
              width={152}
              height={137}
              className="mx-auto mb-[28px] fill-[#323f50]"
            />
            <h2 className="font-semibold text-[40px] leading-[1.5] tracking-[0em] text-[#323f50]">
              Birds
            </h2>
          </Link>
        </li>
      </ul>
    </>
  );
}
