import CategoryCard from "@/components/CategoryCard/CategoryCard";
import Icon from "@/components/Icon/Icon";
import { fetchStatistics } from "@/lib/api/server/statisticsServer";

// styles
const cardClass = "rounded-[20px] bg-[#c7e0f6]";
const linkClass = "flex flex-col justify-between min-h-[280px] py-8 px-6";
const iconClass = "mx-auto fill-[#323f50]";
const cardTitleClass =
  "flex flex-col gap-[2px] font-semibold text-[40px] text-[#323f50]";

// Always render this page dynamically to display up-to-date statistics.
export const dynamic = "force-dynamic";

export default async function Animals() {
  const {
    availableDogsCount,
    availableCatsCount,
    availableRodentsCount,
    availableBirdsCount,
    happyOwnersCount,
    animalsAvailableCount,
  } = await fetchStatistics();

  return (
    <>
      <div className="flex flex-col gap-4 mb-12 md:max-w-[740px]">
        <p className="text-[20px] font-medium text-[#aad2f2] md:text-[24px]">
          Find your companion
        </p>
        <h1 className="text-[32px] font-semibold text-[var(--text-main)] md:text-[40px]">
          Every pet deserves a loving home
        </h1>
        <p className="mb-8 text-[16px] font-medium text-[var(--text-secondary)] md:text-[20px]">
          Find your perfect companion from trusted breeders and shelters. All
          pets are health-checked, vaccinated, and ready for a loving home.
        </p>
        <ul className="flex items-center gap-8">
          <li className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-[var(--background-category)]">
              <Icon
                name="star"
                className="stroke-[var(--icon-category)] fill-none"
              />
            </div>
            <p className="flex flex-col gap-2 font-medium text-[20px] text-[var(--text-secondary)]">
              {happyOwnersCount}
              <span className="font-normal text-[14px]">Happy Owners</span>
            </p>
          </li>
          <li className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-[var(--background-category)]">
              <Icon name="check" className="fill-[var(--icon-category)]" />
            </div>
            <p className="flex flex-col gap-2 font-medium text-[20px] text-[var(--text-secondary)]">
              {animalsAvailableCount}
              <span className="font-normal text-[14px]">Animals Available</span>
            </p>
          </li>
        </ul>
      </div>
      <ul className="grid gap-6 md:grid-cols-2 ">
        <CategoryCard
          title="Dogs"
          count={availableDogsCount}
          icon="dog"
          iconWidth={216}
          iconHeight={111}
          href="/animals/dog"
          iconClassName={iconClass}
          titleClassName={cardTitleClass}
          contentClassName={linkClass}
          cardClassName={cardClass}
        />

        <CategoryCard
          title="Cats"
          count={availableCatsCount}
          icon="cat"
          iconWidth={216}
          iconHeight={116}
          href="/animals/cat"
          iconClassName={iconClass}
          titleClassName={cardTitleClass}
          contentClassName={linkClass}
          cardClassName={cardClass}
        />

        <CategoryCard
          title="Rodents"
          count={availableRodentsCount}
          icon="hamster"
          iconWidth={200}
          iconHeight={110}
          href="/animals/rodent"
          iconClassName={iconClass}
          titleClassName={cardTitleClass}
          contentClassName={linkClass}
          cardClassName={cardClass}
        />

        <CategoryCard
          title="Birds"
          count={availableBirdsCount}
          icon="parrot"
          iconWidth={152}
          iconHeight={137}
          href="/animals/bird"
          iconClassName={iconClass}
          titleClassName={cardTitleClass}
          contentClassName={linkClass}
          cardClassName={cardClass}
        />
      </ul>
    </>
  );
}
