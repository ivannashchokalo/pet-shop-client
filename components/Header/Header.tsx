import Container from "../Container/Container";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import FavoritesLink from "../FavoritesLink/FavoritesLink";
import ProfileLink from "../ProfileLink/ProfileLink";
import BurgerButton from "../MobileMenu/MobileMenu";
import HeaderNavList from "../HeaderNavList/HeaderNavList";
import HeaderThemeSwitcher from "../HeaderThemeSwitcher/HeaderThemeSwitcher";
import Logo from "../Logo/Logo";

export default async function Header() {
  return (
    <header className="sticky top-0 z-100 md:static py-[18px] border-b border-[#85a3c9] bg-[#fff]">
      <Container className="relative flex items-center ">
        <nav className="flex items-center gap-[72px]">
          <Logo />
          <HeaderNavList />
        </nav>
        <div className="flex items-center gap-[8px] ml-auto md:mr-6">
          <FavoritesLink />
          <ProfileLink />
          <AuthNavigation />
          <BurgerButton />
        </div>
        <HeaderThemeSwitcher />
      </Container>
    </header>
  );
}
