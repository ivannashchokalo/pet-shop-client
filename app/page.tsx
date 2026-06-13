import Section from "@/components/Section/Section";
import Container from "@/components/Container/Container";
import Image from "next/image";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <>
      <Section className="relative bg-[url('/hero-bg.svg')] max-w-[1440px] mx-auto bg-cover bg-no-repeat">
        <Container className="flex flex-col min-h-[850px]">
          <div className="flex flex-col items-start justify-center gap-8 mt-auto mb-[60px]">
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
          <ul className=" h-[200px] bg-[#000]">
            <li>ddd</li>
          </ul>
          <Image
            src="/dog-hero.webp"
            width={614}
            height={759}
            alt="dog"
            className="absolute top-0 right-0"
          />
        </Container>
      </Section>
    </>
  );
}
