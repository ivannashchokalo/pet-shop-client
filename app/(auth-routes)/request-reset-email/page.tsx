"use client";

import { requestResetEmail } from "@/lib/api/client/auth";
import { useMutation } from "@tanstack/react-query";
import Section from "@/components/Section/Section";
import Container from "@/components/Container/Container";
import RequestResetEmailForm from "@/components/RequestResetEmailForm/RequestResetEmailForm";
import ContentCard from "@/components/ContentCard/ContentCard";
import { toast } from "sonner";

export default function RequestResetEmail() {
  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: requestResetEmail,

    onError: () => {
      toast.error("Failed to send the reset email. Please try again.");
    },
  });

  if (isSuccess) {
    return (
      <Section>
        <Container>
          <h1 className="mb-8 text-[36px] text-center font-bold text-[#151c26] md:text-[48px] xl:text-[64px]">
            Check your email
          </h1>

          <p className="text-[20px] text-center font-medium text-[#323f50]">
            We have sent password reset instructions to your email address.
          </p>
        </Container>
      </Section>
    );
  }

  return (
    <Section>
      <Container>
        <h1 className="sr-only">Reset Password</h1>
        <ContentCard>
          <p className="mb-6 mx-auto font-medium text-[16px] text-[#576b86]">
            Enter your email and we will send you a link to reset your password.
          </p>
          <RequestResetEmailForm isPending={isPending} onSubmit={mutate} />
        </ContentCard>
      </Container>
    </Section>
  );
}
