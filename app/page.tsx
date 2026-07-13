import Section from "@/components/Section/Section";
import Container from "@/components/Container/Container";
import Image from "next/image";
import Button from "@/components/Button/Button";
import { fetchStatistics } from "@/lib/api/server/statisticsServer";
import CategoryCard from "@/components/CategoryCard/CategoryCard";

export default async function Home() {
  const {
    dogsCount,
    catsCount,
    rodentsCount,
    birdsCount,
    happyOwnersCount,
    animalsAvailableCount,
  } = await fetchStatistics();

  // const cardClass =
  //   "flex flex-col justify-between min-h-[280px] py-8 px-6 rounded-[20px] bg-[#c7e0f6]";
  const iconClass = "mx-auto fill-[#323f50]";
  const cardTitleClass =
    "flex flex-col gap-[2px] font-semibold text-[32px] leading-[1.5] text-[#323f50]";
  // const subtitleStyles =
  //   "font-medium text-[15px] leading-[1.4] tracking-[0.01em] text-[#576b86]";
  return (
    <>
      <Section className="bg-[url('/hero-bg.svg')] mx-auto  bg-top bg-cover bg-no-repeat">
        <Container className="relative min-h-[600px] xl:flex xl:items-center xl:min-h-[700px]">
          <div className="flex flex-col items-start justify-center mb-[60px]">
            <h1 className="mb-6 text-[36px] font-bold leading-[1.3] text-[#fafafa] md:max-w-[620px] md:mb-8 md:text-[48px] xl:max-w-[700px] xl:text-[64px]">
              Give love and comfort to a new friend
            </h1>
            <p className="mb-4 max-w-[220px] text-[15px] font-medium leading-[1.5] text-[#c7e0f6] md:max-w-[328px] md:mb-6 md:text-[16px] xl:max-w-[480px] xl:text-[20px]">
              A convenient service where every cat, puppy, or parrot undergoes a
              full veterinary checkup before meeting you.
            </p>
            <p className="mb-10 max-w-[200px] font-semibold text-[15px] leading-[1.5] text-[#fafafa] md:max-w-[240px] md:mb-8 md:text-[16px] xl:text-[20px] xl:max-w-[480px]">
              Ready for new emotions? Your favorite is here.
            </p>
            <Button
              href="/animals"
              className="relative z-20 h-[44px] min-w-[100%] p-[10px] font-semibold text-[20px] leading-[0.9] text-[#323f50] md:min-w-[302px]"
            >
              Find the tail
            </Button>
          </div>
          <ul className="absolute bottom-[-50px] left-[50%] translate-x-[-50%] translate-y-[50%] z-20 flex flex-col items-center  py-[32px] px-[24px] bg-[#fff] rounded-[20px] shadow-[16px_-6px_67px_0_rgba(128,128,128,0.2)] md:flex-row">
            <li className="flex flex-col gap-[2px] px-[64px] pb-6 font-semibold text-[48px] leading-normal text-center text-black border-b-2 border-b-[#BAC9DF] md:border-b-0 md:border-r-2 border-r-[#BAC9DF] md:pb-0">
              {happyOwnersCount}
              <span className="whitespace-nowrap font-normal text-[20px] leading-normal tracking-normal text-black">
                Happy Owners
              </span>
            </li>
            <li className="whitespace-nowrap flex flex-col gap-[2px] px-[64px] pt-[24px] font-semibold text-[48px] leading-normal text-center text-black md:pt-0">
              {animalsAvailableCount}
              <span className="font-normal text-[20px] leading-normal tracking-normal text-black">
                Animals Available
              </span>
            </li>
          </ul>
          <div className="absolute top-[12%] right-0 w-[227px] h-[319px] md:w-[424px] md:h-[524px] xl:w-[603px] xl:h-[746px] xl:top-[-20px] xl:right-[40px]">
            <Image src="/dog-hero.webp" fill alt="dog" />
          </div>
        </Container>
      </Section>
      <Section>
        <Container className="relative min-h-[1150px] flex flex-col justify-end items-center md:min-h-[800px] md:flex-row">
          <div className="md:max-w-[300px] xl:max-w-[600px]">
            <h2 className="text-[32px] mb-8 font-bold leading-[1.5] text-[#151c26] xl:mb-[40px] xl:text-[40px]">
              Why future owners trust us?
            </h2>
            <ul className="flex flex-col gap-6 xl:gap-8 xl:max-w-[580px] xl:ml-auto">
              <li>
                <h3 className="mb-2 font-semibold text-[24px] xl:text-[28px] leading-[1.5] text-[#151c26]">
                  01 / Safe origin
                </h3>
                <p className="font-normal text-[18px] leading-[1.5] text-[#323f50]">
                  We work exclusively with certified experts, dog trainers, and
                  official shelters.
                </p>
              </li>
              <li>
                <h3 className="mb-2 font-semibold text-[28px] leading-[1.5] text-[#151c26]">
                  02 / Health care
                </h3>
                <p className="font-normal text-[18px] leading-[1.5] text-[#323f50]">
                  We only transfer pets with a chip, veterinary passport, and
                  all vaccinations.
                </p>
              </li>
              <li>
                <h3 className="mb-2 font-semibold text-[28px] leading-[1.5] text-[#151c26]">
                  03 / Supporting a new family
                </h3>
                <p className="font-normal text-[18px] leading-[1.5] text-[#323f50]">
                  We stay in touch and advise on adaptation, nutrition, and
                  care.
                </p>
              </li>
            </ul>
          </div>
          <div className="relative w-[400px] h-[448px] md:absolute md:left-0 md:top-[50%] md:translate-y-[-50%] xl:top-0 xl:translate-y-0 xl:w-[652px] xl:h-[798px]">
            <Image src="/customer.webp" fill alt="customer with animal" />
          </div>
        </Container>
      </Section>
      <Section className="md:py-[100px]">
        <Container>
          <div className="relative">
            <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              <CategoryCard
                title="Dogs"
                count={dogsCount}
                icon="dog"
                iconWidth={160}
                iconHeight={82}
                iconClassName={iconClass}
                titleClassName={cardTitleClass}
              />

              <CategoryCard
                title="Cats"
                count={catsCount}
                icon="cat"
                iconWidth={154}
                iconHeight={89}
                iconClassName={iconClass}
                titleClassName={cardTitleClass}
              />

              <CategoryCard
                title="Rodents"
                count={rodentsCount}
                icon="hamster"
                iconWidth={144}
                iconHeight={80}
                iconClassName={iconClass}
                titleClassName={cardTitleClass}
              />

              <CategoryCard
                title="Birds"
                count={birdsCount}
                icon="parrot"
                iconWidth={106}
                iconHeight={95}
                iconClassName={iconClass}
                titleClassName={cardTitleClass}
              />
            </ul>
            <Image
              src="/animals-home.webp"
              width={478}
              height={296}
              alt="animals"
              className="absolute top-0 right-0 translate-y-[-46%]"
            />
          </div>
        </Container>
      </Section>
    </>
  );
}
