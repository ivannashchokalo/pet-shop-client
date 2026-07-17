import Container from "../Container/Container";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import FavoritesLink from "../FavoritesLink/FavoritesLink";
import ProfileLink from "../ProfileLink/ProfileLink";
import MobileMenu from "../MobileMenu/MobileMenu";
import HeaderNavList from "../HeaderNavList/HeaderNavList";
import HeaderThemeSwitcher from "../HeaderThemeSwitcher/HeaderThemeSwitcher";
import Logo from "../Logo/Logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 md:static py-4 bg-[var(--background-header)] shadow-[var(--header-shadow)]">
      <Container className="relative flex items-center">
        <nav className="flex items-center gap-[72px]">
          <Logo />
          <HeaderNavList />
        </nav>
        <div className="flex items-center gap-2 ml-auto md:mr-6">
          <FavoritesLink />
          <ProfileLink />
          <AuthNavigation />
          <MobileMenu />
        </div>
        <HeaderThemeSwitcher />
      </Container>
    </header>
  );
}
