import Section from "@/components/Section/Section";
import Container from "@/components/Container/Container";
// import { Suspense } from "react";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

export default function RootLayout({
  children,
  // login,
  // sidebar,
}: Readonly<{
  children: React.ReactNode;
  // login: React.ReactNode;
  // sidebar: React.ReactNode;
}>) {
  return (
    <Section>
      <Container>
        {/* <h1>Animals</h1> */}
        {/* <Suspense fallback={<p>Loading types...</p>}>{sidebar}</Suspense> */}
        <Breadcrumbs />
        {children}
        {/* {login} */}
      </Container>
    </Section>
  );
}
