import Section from "@/components/Section/Section";
import Container from "@/components/Container/Container";
import Icon from "@/components/Icon/Icon";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Section className="mx-auto bg-[image:var(--about-bg)] bg-cover bg-no-repeat bg-top">
        <Container className="relative md:flex md:min-h-[700px]">
          <div className="xl:self-center">
            <h1 className="mb-8 max-w-[650px] text-[36px] font-bold leading-[1.34375] text-[var(--text-main)] md:text-[48px] xl:text-[64px]">
              Creating a world where every paw finds a home
            </h1>
            <p className="text-[15px] font-medium text-[var(--text-secondary)] md:max-w-[320px] md:text-[20px] xl:max-w-[480px]">
              FluffyTail is more than just a pet finder. We bring together
              like-minded people, veterinarians, and licensed experts to make
              your pet&apos;s journey to a new home safe, easy, and filled with
              love.
            </p>
          </div>
          <div className="relative h-[370px] w-[395px] md:absolute md:bottom-[100px] md:right-0 md:z-10 md:h-[480px] md:w-[500px] xl:top-[-50px] xl:h-[800px] xl:w-[830px]">
            <Image src="/about-animals.webp" alt="animals" fill />
          </div>
        </Container>
      </Section>
      <Section className="md:py-[100px]">
        <Container>
          <ul className="flex flex-col gap-10 xl:flex-row xl:justify-between">
            <li className="flex flex-col gap-8 md:flex-row xl:w-[500px] xl:flex-col xl:items-center">
              <div className="md:order-1 xl:order-0">
                <h2 className="mb-4 text-[32px] font-semibold text-[var(--text-main)] xl:text-[40px]">
                  Our mission
                </h2>
                <p className="font-normal text-[18px] text-[var(--text-secondary)]">
                  To change the culture of finding and buying pets in Ukraine,
                  making this process completely transparent and safe for both
                  parties
                </p>
              </div>

              <div className="relative h-[330px] w-[330px] mr-auto md:order-0 md:mr-0 md:shrink-0 xl:order-1 xl:h-[500px] xl:w-[500px]">
                <Image src="/parrot.webp" fill alt="parrot" />
              </div>
            </li>
            <li className="flex flex-col gap-8 md:flex-row xl:flex-col xl:items-center xl:w-[500px]">
              <div className="xl:order-1">
                <h2 className="mb-4 text-[32px] font-semibold text-[var(--text-main)] xl:text-[40px]">
                  Our goal
                </h2>
                <p className="font-normal text-[18px] text-[var(--text-secondary)]">
                  To create a single ecosystem where everyone can easily find a
                  healthy ponytail from a proven nursery without any risks.
                </p>
              </div>

              <div className="relative h-[330px] w-[330px] ml-auto shrink-0 md:ml-0 xl:order-0 xl:h-[500px] xl:w-[500px]">
                <Image src="/dog-and-cat.webp" alt="parrot" fill />
              </div>
            </li>
          </ul>
        </Container>
      </Section>
      <Section className="md:py-[100px]">
        <Container className="flex flex-col items-center gap-12">
          <h2 className="text-center text-[32px] font-bold text-[var(--text-main)] xl:text-[40px]">
            People who care about every paw
          </h2>
          <ul className="flex flex-col items-center gap-12 md:flex-row xl:gap-20">
            <li>
              <div className="relative mb-6 h-[226px] w-[226px] md:h-[200px] md:w-[200px] xl:h-[284px] xl:w-[284px]">
                <Image src="/about-boy.webp" fill alt="Project Founder & CEO" />
              </div>

              <h2 className="mb-2 font-semibold text-[20px] text-center text-[var(--text-main)]">
                Maksym Sergienko
              </h2>
              <p className="text-[16px] text-center text-[var(--text-secondary)]">
                Project Founder & CEO
              </p>
            </li>
            <li>
              <div className="relative mb-6 h-[226px] w-[226px] md:h-[200px] md:w-[200px] xl:h-[284px] xl:w-[284px]">
                <Image
                  src="/about-girl-1.webp"
                  fill
                  alt="Chief veterinary expert"
                />
              </div>

              <h2 className="mb-2 font-semibold text-[20px] text-center text-[var(--text-main)]">
                Anna Kovalchuk
              </h2>
              <p className="text-[16px] text-center text-[var(--text-secondary)]">
                Chief veterinary expert
              </p>
            </li>
            <li>
              <div className="relative mb-6 h-[226px] w-[226px] md:h-[200px] md:w-[200px] xl:h-[284px] xl:w-[284px]">
                <Image src="/about-girl-2.webp" fill alt="Head of Support" />
              </div>

              <h2 className="mb-2 font-semibold text-[20px] text-center text-[var(--text-main)]">
                Olena Kravchenko
              </h2>
              <p className="text-[16px] text-center text-[var(--text-secondary)]">
                Head of Support
              </p>
            </li>
          </ul>
        </Container>
      </Section>
      <Section className="md:pb-[100px]">
        <Container className="flex min-h-[800px] flex-col items-center gap-8 xl:flex-row xl:items-end xl:justify-between">
          <div className="relative mt-auto">
            <div className="h-[280px] w-[400px] overflow-hidden rounded-[20px] md:h-[490px] md:w-[690px] xl:h-[525px] xl:w-[740px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2607.2218873840015!2d16.603672076483978!3d49.196350171380004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47129450805f19a3%3A0x1f5f10890bc212d!2zxIxlc2vDoSAxMiwgNjAyIDAwIEJybm8tc3TFmWVk!5e0!3m2!1suk!2scz!4v1781526001973!5m2!1suk!2scz"
                loading="lazy"
                className="w-full h-full"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="pointer-events-none absolute left-0 top-0 h-full w-full rounded-[20px] bg-[var(--text-secondary)]/20"></div>
            </div>
            <div className="absolute left-1/2 top-0 z-40 h-[330px] w-[370px] -translate-x-1/2 -translate-y-[85%] xl:left-0 xl:translate-x-0">
              <Image src="/about-dog.webp" fill alt="dog on a map" />
            </div>
          </div>
          <div className="md:flex md:items-center md:gap-4 xl:mb-20 xl:mt-auto xl:flex-col xl:gap-8">
            <div>
              <h2 className="mb-10 font-bold text-[40px] text-[var(--text-main)]">
                Work schedule
              </h2>
              <ul className="flex items-center gap-6">
                <li>
                  <p className="text-[16px] leading-[1] tracking-[0.01em] text-[var(--text-main)]">
                    Mon–Fri
                  </p>
                  <span className="font-semibold text-[24px] uppercase text-[var(--text-main)]">
                    10:00 - 20:00
                  </span>
                </li>
                <li>
                  <p className="text-[16px] leading-[1] tracking-[0.01em] text-[var(--text-main)]">
                    Sat–Sun
                  </p>
                  <span className="font-semibold text-[24px] uppercase text-[var(--text-main)]">
                    10:00 - 18:00
                  </span>
                </li>
              </ul>
            </div>

            <ul>
              <li className="flex items-center gap-6 mb-6">
                <Icon
                  name="location"
                  width={32}
                  height={32}
                  className="stroke-[var(--icon-color)] fill-none"
                />
                <p className="flex flex-col gap-2 font-semibold text-[24px] text-[var(--text-main)]">
                  <span className="text-[16px] leading-[1] tracking-[0.01em] text-[var(--text-main)]">
                    address
                  </span>
                  Česká 12, 602 00 Brno
                </p>
              </li>
              <li className="flex items-center gap-6">
                <Icon
                  name="phone"
                  width={32}
                  height={32}
                  className="fill-[var(--icon-color)]"
                />
                <p className="flex flex-col gap-2 font-semibold text-[24px] text-[var(--text-main)]">
                  <span className="text-[16px] leading-[1] tracking-[0.01em] text-[var(--text-main)]">
                    phone
                  </span>
                  +420 777 764 374
                </p>
              </li>
            </ul>
          </div>
        </Container>
      </Section>
    </>
  );
}
