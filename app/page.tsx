import Section from "@/components/Section/Section";
import Container from "@/components/Container/Container";
import Image from "next/image";
import Button from "@/components/Button/Button";
import { fetchStatistics } from "@/lib/api/server/statisticsServer";
import Icon from "@/components/Icon/Icon";

export default async function Home() {
  const {
    dogsCount,
    catsCount,
    rodentsCount,
    birdsCount,
    happyOwnersCount,
    animalsAvailableCount,
  } = await fetchStatistics();

  const cardClass =
    "flex flex-col justify-between min-h-[280px] py-8 px-6 rounded-[20px] bg-[#c7e0f6]";
  const iconClass = "mx-auto fill-[#323f50]";
  const cardTitleClass =
    "flex flex-col gap-[2px] font-semibold text-[32px] leading-[1.5] text-[#323f50]";
  const subtitleStyles =
    "font-medium text-[15px] leading-[1.4] tracking-[0.01em] text-[#576b86]";
  return (
    <>
      <Section className="bg-[url('/hero-bg.svg')] mx-auto  bg-top bg-cover bg-no-repeat">
        <Container className="relative flex flex-col justify-evenly min-h-[1000px]">
          <div className="flex flex-col items-start justify-center gap-8 mb-[60px]">
            <h1 className="max-w-[756px] font-bold text-[64px] leading-[1.3] text-[#fafafa]">
              Give love and comfort to a new friend
            </h1>
            <p className="max-w-[480px] font-medium text-[20px] leading-[1.5] text-[#c7e0f6]">
              A convenient service where every cat, puppy, or parrot undergoes a
              full veterinary checkup before meeting you.
            </p>
            <p className="max-w-[480px] font-semibold text-[20px] leading-[1.5] text-[#fafafa]">
              Ready for new emotions? Your favorite is here.
            </p>
            <Button
              href="/animals"
              className="min-w-[302px] p-[10px] font-semibold text-[20px] leading-[0.9] tracking-[0em] text-[#323f50]"
            >
              Find the tail
            </Button>
          </div>
          <ul className="relative z-20 self-center flex items-center  py-[32px] px-[24px] bg-[#fff] rounded-[20px] shadow-[16px_-6px_67px_0_rgba(128,128,128,0.2)]">
            <li className="flex flex-col gap-[2px] px-[64px] font-semibold text-6xl leading-normal text-center text-black relative after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-[2px] after:h-[115px] after:bg-[rgba(50,63,80,0.1)]">
              {happyOwnersCount}
              <span className="font-normal text-[24px] leading-normal tracking-normal text-black">
                Happy Owners
              </span>
            </li>
            <li className="flex flex-col gap-[2px] px-[64px] font-semibold text-6xl leading-normal text-center text-black">
              {animalsAvailableCount}
              <span className="font-normal text-[24px] leading-normal tracking-normal text-black">
                Animals Available
              </span>
            </li>
          </ul>
          <Image
            src="/dog-hero.webp"
            width={614}
            height={759}
            alt="dog"
            className="absolute top-[-50px] right-0 z-10"
          />
        </Container>
      </Section>
      <Section>
        <Container className="relative flex justify-end items-center min-h-[798px]">
          <Image
            src="/customer.webp"
            width={652}
            height={798}
            alt="customer with animal"
            className="absolute top-[-50px] left-0 "
          />
          <div>
            <h2 className="mb-[40px] font-bold text-[40px] leading-[1.5] text-[#151c26]">
              Why future owners trust us?
            </h2>
            <ul className="flex flex-col gap-8">
              <li>
                <h3 className="mb-2 font-semibold text-[28px] leading-[1.5] text-[#151c26]">
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
        </Container>
      </Section>
      <Section className="md:py-[100px]">
        <Container>
          <div className="relative">
            <ul className="grid grid-cols-4 gap-6">
              <li className={cardClass}>
                <Icon
                  name="dog"
                  width={160}
                  height={82}
                  className={iconClass}
                />
                <h2 className={cardTitleClass}>
                  Dogs{" "}
                  <span className={subtitleStyles}>{dogsCount} Available</span>
                </h2>
              </li>
              <li className={cardClass}>
                <Icon
                  name="cat"
                  width={154}
                  height={89}
                  className={iconClass}
                />
                <h2 className={cardTitleClass}>
                  Cats{" "}
                  <span className={subtitleStyles}>{catsCount} Available</span>
                </h2>
              </li>
              <li className={cardClass}>
                <Icon
                  name="hamster"
                  width={144}
                  height={80}
                  className={iconClass}
                />
                <h2 className={cardTitleClass}>
                  Rodents{" "}
                  <span className={subtitleStyles}>
                    {rodentsCount} Available
                  </span>
                </h2>
              </li>
              <li className={cardClass}>
                <Icon
                  name="parrot"
                  width={106}
                  height={95}
                  className={iconClass}
                />
                <h2 className={cardTitleClass}>
                  Birds{" "}
                  <span className={subtitleStyles}>{birdsCount} Available</span>
                </h2>
              </li>
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
