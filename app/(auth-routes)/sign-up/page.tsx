import Container from "@/components/Container/Container";
import Section from "@/components/Section/Section";
import ContentCard from "@/components/ContentCard/ContentCard";
import SignUpForm from "@/components/SingUpForm/SignUpForm";

export default function SignUp() {
  return (
    <Section>
      <Container>
        <ContentCard>
          <h1 className="sr-only">Sign Up</h1>
          <SignUpForm />
        </ContentCard>
      </Container>
    </Section>
  );
}
