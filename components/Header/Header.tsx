import Link from "next/link";
import Container from "../Container/Container";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import FavoritesLink from "../FavoritesLink/FavoritesLink";
import ProfileLink from "../ProfileLink/ProfileLink";
import Icon from "../Icon/Icon";
import BurgerButton from "../BurgerButton/BurgerButton";

export default async function Header() {
  return (
    <header className="py-[18px] border-b border-[#85a3c9] bg-[#fff]">
      <Container className="flex items-center justify-between">
        <nav style={{ display: "flex", gap: 40 }}>
          <Link href="/">
            <Icon
              name="logo"
              className="fill-[#85a3c9]"
              width={42}
              height={40}
            />
          </Link>
          <ul className="hidden md:flex gap-4">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/animals">Animals</Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-[6px]">
          <FavoritesLink />
          <ProfileLink />
          <AuthNavigation />
          <BurgerButton />
        </div>
      </Container>
    </header>
  );
}
