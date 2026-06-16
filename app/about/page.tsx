import Section from "@/components//Section/Section";
import Container from "@/components/Container/Container";
import Icon from "@/components/Icon/Icon";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Section className="bg-[url('/about-background.svg')] mx-auto  bg-top bg-cover bg-no-repeat">
        <Container className="relative flex min-h-[700px]">
          <div className="self-center">
            <h1 className="mb-8 font-bold text-[64px] leading-[1.34375] text-[#151c26] md:max-w-[650px]">
              Creating a world where every paw finds a home
            </h1>
            <p className="font-medium text-[20px] leading-[1.5] text-[#323f50] md:max-w-[480px]">
              FluffyTail is more than just a pet finder. We bring together
              like-minded people, veterinarians, and licensed experts to make
              your tail's journey to a new home safe, easy, and filled with
              love.
            </p>
          </div>
          <Image
            src="/about-animals.webp"
            width={700}
            height={745}
            alt="animals"
            className="absolute top-[-50px] right-0 z-10"
          />
        </Container>
      </Section>
      <Section className="md:py-[100px]">
        <Container>
          <ul className="flex justify-between">
            <li className="w-[500px]">
              <h2 className="mb-4 font-[600] text-[40px] leading-[1.5] text-[#151c26]">
                Our mission
              </h2>
              <p className="mb-8 font-normal text-[18px] leading-[1.5] text-[#323f50]">
                To change the culture of finding and buying pets in Ukraine,
                making this process completely transparent and safe for both
                parties
              </p>
              <Image src="/parrot.webp" width={497} height={497} alt="parrot" />
            </li>
            <li className="w-[500px]">
              <Image
                src="/dog-and-cat.webp"
                width={497}
                height={497}
                alt="parrot"
                className="mb-8"
              />
              <h2 className="mb-4 font-[600] text-[40px] leading-[1.5] text-[#151c26]">
                Our goal
              </h2>
              <p className=" font-normal text-[18px] leading-[1.5] text-[#323f50]">
                To create a single ecosystem where everyone can easily find a
                healthy ponytail from a proven nursery without any risks.
              </p>
            </li>
          </ul>
        </Container>
      </Section>
      <Section className="md:py-[100px]">
        <Container className="flex flex-col gap-[54px] items-center">
          <h2 className="font-[700] text-[40px] leading-[1.5] text-center text-[#151c26]">
            People who care about every paw
          </h2>
          <ul className="flex items-center gap-[80px]">
            <li>
              <Image
                src="/about-boy.webp"
                width={284}
                height={284}
                alt="Project Founder & CEO"
                className="mb-6"
              />
              <h2 className="mb-2 font-[600] text-[20px] leading-[1.5] text-center text-[#151c26]">
                Maksym Sergienko
              </h2>
              <p className="font-[400] text-[16px] leading-[1.5] text-center text-[#323f50]">
                Project Founder & CEO
              </p>
            </li>
            <li>
              <Image
                src="/about-girl-1.webp"
                width={284}
                height={284}
                alt="Chief veterinary expert"
                className="mb-6"
              />
              <h2 className="mb-2 font-[600] text-[20px] leading-[1.5] text-center text-[#151c26]">
                Anna Kovalchuk
              </h2>
              <p className="font-[400] text-[16px] leading-[1.5] text-center text-[#323f50]">
                Chief veterinary expert
              </p>
            </li>
            <li>
              <Image
                src="/about-girl-2.webp"
                width={284}
                height={284}
                alt="Head of Support"
                className="mb-6"
              />
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
        <Container className="md:min-h-[800px] flex items-end justify-between">
          <div className="relative">
            <div className="overflow-hidden rounded-[20px]  w-[737px] h-[523px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2607.2218873840015!2d16.603672076483978!3d49.196350171380004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47129450805f19a3%3A0x1f5f10890bc212d!2zxIxlc2vDoSAxMiwgNjAyIDAwIEJybm8tc3TFmWVk!5e0!3m2!1suk!2scz!4v1781526001973!5m2!1suk!2scz"
                loading="lazy"
                className="w-full h-full"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute top-0 left-0 w-full h-full bg-[#323f50]/20 rounded-[20px]  pointer-events-none"></div>
            </div>
            <Image
              src="/about-dog.webp"
              width={370}
              height={328}
              alt="dog on a map"
              className="absolute top-0 left-0 translate-y-[-85%] z-40"
            />
          </div>
          <div className="mt-auto mb-[80px]">
            <h2 className="mb-10 font-[700] text-[40px] leading-[1.5] text-[#151c26]">
              Work schedule
            </h2>
            <ul className="flex items-center gap-6 mb-8">
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
