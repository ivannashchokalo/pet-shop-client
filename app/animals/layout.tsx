import Section from "@/components/Section/Section";
import Container from "@/components/Container/Container";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Section>
      <Container className="flex flex-col gap-8">
        <Breadcrumbs />
        {children}
      </Container>
    </Section>
  );
}
