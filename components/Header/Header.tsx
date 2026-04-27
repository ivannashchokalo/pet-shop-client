import Link from "next/link";
import Container from "../Container/Container";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import FavoritesLink from "../FavoritesLink/FavoritesLink";
import ProfileLink from "../ProfileLink/ProfileLink";

export default async function Header() {
  return (
    <header style={{ padding: "25px 0" }}>
      <Container>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <nav style={{ display: "flex", gap: 40 }}>
            <Link href="/">Logo</Link>
            <ul style={{ display: "flex", gap: 16 }}>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/animals">Animals</Link>
              </li>
            </ul>
          </nav>

          <FavoritesLink />
          <ProfileLink />
          <AuthNavigation />
        </div>
      </Container>
    </header>
  );
}
