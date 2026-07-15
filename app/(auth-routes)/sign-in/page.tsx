import Container from "@/components/Container/Container";
import Section from "@/components/Section/Section";
import SignInForm from "@/components/SignInForm/SignInForm";
import ContentCard from "@/components/ContentCard/ContentCard";

export default function SignIn() {
  return (
    <Section>
      <Container>
        <ContentCard>
          <h1 className="sr-only">Sign In</h1>
          <SignInForm />
        </ContentCard>
      </Container>
    </Section>
  );
}
