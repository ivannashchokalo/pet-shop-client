import { ChangeNameForm } from "@/components/ChangeNameForm/ChangeNameForm";
import { ChangePasswordForm } from "@/components/ChangePasswordForm/ChangePasswordForm";
import Container from "@/components/Container/Container";
import ContentCard from "@/components/ContentCard/ContentCard";
import Section from "@/components/Section/Section";

export default function Settings() {
  return (
    <Section>
      <Container>
        <ContentCard className="gap-8">
          <h1 className="sr-only">Settings</h1>
          <ChangeNameForm />
          <ChangePasswordForm />
        </ContentCard>
      </Container>
    </Section>
  );
}
