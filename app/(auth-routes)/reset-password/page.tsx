"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";

import Container from "@/components/Container/Container";
import ContentCard from "@/components/ContentCard/ContentCard";
import ResetPasswordForm from "@/components/ResetPasswordForm/ResetPasswordForm";
import Section from "@/components/Section/Section";
import { resetPassword } from "@/lib/api/client/auth";
import Button from "@/components/Button/Button";
import { toast } from "sonner";

export default function ResetPassword() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const token = searchParams.get("token") || "";

  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: resetPassword,
    onError: () => {
      toast.error("Failed to reset your password. Please try again.");
    },
  });

  if (isSuccess) {
    return (
      <Section>
        <Container>
          <ContentCard>
            <h1 className="mb-8 text-[36px] text-center font-bold text-[var(--text-main)] md:text-[48px] xl:text-[64px]">
              Password updated
            </h1>

            <p className="text-[20px] text-center font-medium text-[var(--text-secondary)]">
              Your password has been reset successfully.
            </p>

            <Button
              onClick={() => router.push("/sign-in")}
              className="py-2 px-8 font-medium text-[16px]"
            >
              Go to Login
            </Button>
          </ContentCard>
        </Container>
      </Section>
    );
  }

  return (
    <Section>
      <Container>
        <h1 className="sr-only">Reset Password</h1>
        <ContentCard>
          <p className="mx-auto mb-6 font-medium text-[20px] text-[#576b86]">
            Enter your new password below
          </p>
          <ResetPasswordForm
            isPending={isPending}
            onSubmit={(values) =>
              mutate({
                password: values.password,
                token,
              })
            }
          />
        </ContentCard>
      </Container>
    </Section>
  );
}
