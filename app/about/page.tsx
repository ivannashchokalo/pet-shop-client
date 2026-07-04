import Section from "@/components//Section/Section";
import Container from "@/components/Container/Container";
import Icon from "@/components/Icon/Icon";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Section className="bg-[url('/about-background.svg')] mx-auto  bg-top bg-cover bg-no-repeat">
        <Container className="relative md:flex md:min-h-[700px]">
          <div className="xl:self-center">
            <h1 className="mb-8 font-bold text-[36px] md:text-[48px] xl:text-[64px] leading-[1.34375] text-[#151c26] md:max-w-[650px]">
              Creating a world where every paw finds a home
            </h1>
            <p className="font-medium text-[15px] md:max-w-[320px] md:text-[20px] leading-[1.5] text-[#323f50] xl:max-w-[480px]">
              FluffyTail is more than just a pet finder. We bring together
              like-minded people, veterinarians, and licensed experts to make
              your pet&apos;s journey to a new home safe, easy, and filled with
              love.
            </p>
          </div>
          <div className="relative w-[395px] h-[370px] md:absolute md:bottom-[100px] xl:top-[-50px] md:right-0 md:z-10 md:w-[500px] md:h-[480px] xl:w-[830px] xl:h-[800px]">
            <Image src="/about-animals.webp" alt="animals" fill />
          </div>
        </Container>
      </Section>
      <Section className="md:py-[100px]">
        <Container>
          <ul className="flex flex-col gap-10 xl:flex-row xl:justify-between">
            <li className="flex flex-col gap-8 md:flex-row xl:w-[500px] xl:flex-col xl:items-center">
              <div className="md:order-1 xl:order-0">
                <h2 className="mb-4 font-[600] text-[32px] xl:text-[40px] leading-[1.5] text-[#151c26]">
                  Our mission
                </h2>
                <p className="font-normal text-[18px] leading-[1.5] text-[#323f50]">
                  To change the culture of finding and buying pets in Ukraine,
                  making this process completely transparent and safe for both
                  parties
                </p>
              </div>

              <div className="relative w-[330px] h-[330px] mr-[auto] md:mr-0 md:flex-shrink-0 md:order-0 xl:order-1 xl:w-[500px] xl:h-[500px]">
                <Image src="/parrot.webp" fill alt="parrot" />
              </div>
            </li>
            <li className="flex flex-col gap-8 md:flex-row xl:flex-col xl:items-center xl:w-[500px]">
              <div className="xl:order-1">
                <h2 className="mb-4 font-[600] text-[32px] xl:text-[40px] leading-[1.5] text-[#151c26]">
                  Our goal
                </h2>
                <p className="font-normal text-[18px] leading-[1.5] text-[#323f50]">
                  To create a single ecosystem where everyone can easily find a
                  healthy ponytail from a proven nursery without any risks.
                </p>
              </div>

              <div className="relative w-[330px] h-[330px] ml-[auto] md:ml-0 flex-shrink-0 xl:w-[500px] xl:h-[500px] xl:order-0">
                <Image src="/dog-and-cat.webp" alt="parrot" fill />
              </div>
            </li>
          </ul>
        </Container>
      </Section>
      <Section className="md:py-[100px]">
        <Container className="flex flex-col gap-[50px] items-center">
          <h2 className="font-[700] text-[32px] xl:text-[40px] leading-[1.5] text-center text-[#151c26]">
            People who care about every paw
          </h2>
          <ul className="flex flex-col gap-[50px] items-center md:flex-row  xl:gap-[80px]">
            <li>
              <div className="relative w-[226px] h-[226px] md:w-[200px] md:h-[200px] mb-6 xl:w-[284px] xl:h-[284px]">
                <Image src="/about-boy.webp" fill alt="Project Founder & CEO" />
              </div>

              <h2 className="mb-2 font-[600] text-[20px] leading-[1.5] text-center text-[#151c26]">
                Maksym Sergienko
              </h2>
              <p className="font-[400] text-[16px] leading-[1.5] text-center text-[#323f50]">
                Project Founder & CEO
              </p>
            </li>
            <li>
              <div className="relative w-[226px] h-[226px]  md:w-[200px] md:h-[200px] mb-6 xl:w-[284px] xl:h-[284px]">
                <Image
                  src="/about-girl-1.webp"
                  fill
                  alt="Chief veterinary expert"
                />
              </div>

              <h2 className="mb-2 font-[600] text-[20px] leading-[1.5] text-center text-[#151c26]">
                Anna Kovalchuk
              </h2>
              <p className="font-[400] text-[16px] leading-[1.5] text-center text-[#323f50]">
                Chief veterinary expert
              </p>
            </li>
            <li>
              <div className="relative w-[226px] h-[226px]  md:w-[200px] md:h-[200px] mb-6 xl:w-[284px] xl:h-[284px]">
                <Image src="/about-girl-2.webp" fill alt="Head of Support" />
              </div>

              <h2 className="mb-2 font-[600] text-[20px] leading-[1.5] text-center text-[#151c26]">
                Olena Kravchenko
              </h2>
              <p className="font-[400] text-[16px] leading-[1.5] text-center text-[#323f50]">
                Head of Support
              </p>
            </li>
          </ul>
        </Container>
      </Section>
      <Section className="md:pb-[100px]">
        <Container className="flex flex-col items-center gap-8 xl:flex-row xl:items-end xl:justify-between min-h-[800px]">
          <div className="relative mt-[auto]">
            <div className="overflow-hidden w-[400px] h-[280px] rounded-[20px] md:w-[690px] md:h-[490px] xl:w-[740px] xl:h-[525px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2607.2218873840015!2d16.603672076483978!3d49.196350171380004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47129450805f19a3%3A0x1f5f10890bc212d!2zxIxlc2vDoSAxMiwgNjAyIDAwIEJybm8tc3TFmWVk!5e0!3m2!1suk!2scz!4v1781526001973!5m2!1suk!2scz"
                loading="lazy"
                className="w-full h-full"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute top-0 left-0 w-full h-full bg-[#323f50]/20 rounded-[20px]  pointer-events-none"></div>
            </div>
            <div className="absolute top-0 left-[50%] translate-y-[-85%] translate-x-[-50%] z-40 w-[370px] h-[330px] xl:left-0 xl:translate-x-0">
              <Image src="/about-dog.webp" fill alt="dog on a map" />
            </div>
          </div>
          <div className="md:flex md:items-center md:gap-4 xl:flex-col xl:gap-8  xl:mt-auto xl:mb-[80px]">
            <div>
              <h2 className="mb-10 font-[700] text-[40px] leading-[1.5] text-[#151c26]">
                Work schedule
              </h2>
              <ul className="flex items-center gap-6">
                <li>
                  <p className="font-[400] text-[16px] leading-[1] tracking-[0.01em] text-[#151c26]">
                    Mon–Fri
                  </p>
                  <span className="font-[600] text-[24px] leading-[1.5] uppercase text-[#151c26]">
                    10:00 - 20:00
                  </span>
                </li>
                <li>
                  <p className="font-[400] text-[16px] leading-[1] tracking-[0.01em] text-[#151c26]">
                    Sat–Sun
                  </p>
                  <span className="font-[600] text-[24px] leading-[1.5] uppercase text-[#151c26]">
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
                  className="stroke-[#151c26] fill-none"
                />
                <p className="flex flex-col gap-2 font-[600] text-[24px] leading-[1.5] text-[#151c26]">
                  <span className="font-[400] text-[16px] leading-[1] tracking-[0.01em] text-[#151c26]">
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
                  className="fill-[#151c26]"
                />
                <p className="flex flex-col gap-2 font-[600] text-[24px] leading-[1.5] text-[#151c26]">
                  <span className="font-[400] text-[16px] leading-[1] tracking-[0.01em] text-[#151c26]">
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
