import Icon from "../Icon/Icon";
import Container from "@/components/Container/Container";
import clsx from "clsx";
import Link from "next/link";
import Logo from "../Logo/Logo";

// styles
const footerLinkStyles =
  "font-medium text-[16px] leading-[1.5] tracking-[0.01em] text-[#85a3c9]";
const sectionTitleStyles =
  "mb-4 font-medium text-[24px] leading-[1.5] text-white";
const socialLinkStyles =
  "flex items-center justify-center p-3 rounded-full border-[1.5px] border-[#85a3c9]";

export default function Footer() {
  return (
    <footer className="py-[40px] bg-[#323f50]">
      <Container className="flex flex-col gap-[40px] md:gap-[32px] xl:flex-row flex-wrap justify-between">
        <div>
          <Logo className="mb-2" />

          <p className="font-normal text-[16px] leading-[1.5] text-[#fff]">
            We help you find your perfect friend
          </p>
        </div>
        <div className="flex flex-col gap-8 md:flex-row justify-between xl:gap-[144px]">
          <div>
            <h2 className={sectionTitleStyles}>To buyers</h2>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/animals" className={footerLinkStyles}>
                  Animals
                </Link>
              </li>
              <li>
                <Link href="/about" className={footerLinkStyles}>
                  About us
                </Link>
              </li>
            </ul>
          </div>
          <address>
            <h2 className={sectionTitleStyles}>Contacts</h2>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="tel:+420777764374"
                  className={clsx("flex items-center gap-2", footerLinkStyles)}
                >
                  <Icon name="phone" className="fill-[#85a3c9]" />
                  +420 777 764 374
                </a>
              </li>
              <li>
                <a
                  href="mailto:yourmane@gmail.com"
                  className={clsx("flex items-center gap-2", footerLinkStyles)}
                >
                  <Icon name="email" className="stroke-[#85a3c9] fill-none" />
                  yourmane@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=Česká+12,+602+00+Brno"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={clsx("flex items-center gap-2", footerLinkStyles)}
                >
                  <Icon
                    name="location"
                    className="stroke-[#85a3c9] fill-none"
                  />
                  Česká 12, 602 00 Brno
                </a>
              </li>
            </ul>
          </address>
          <div>
            <h2 className={sectionTitleStyles}>Social networks</h2>
            <ul className="flex gap-3">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={socialLinkStyles}
                >
                  <Icon
                    name="instagram"
                    className="stroke-[#85a3c9] fill-none"
                    width={20}
                    height={20}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={socialLinkStyles}
                >
                  <Icon
                    name="facebook"
                    className="stroke-[#85a3c9] fill-none"
                    width={20}
                    height={20}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://telegram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={socialLinkStyles}
                >
                  <Icon
                    name="telegram"
                    className="stroke-[#85a3c9] fill-none"
                    width={20}
                    height={20}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="font-normal text-[16px] leading-[1.5] text-[rgba(245,245,245,0.5)]">
          ©2026 PetLove · All rights reserved
        </p>
      </Container>
    </footer>
  );
}
