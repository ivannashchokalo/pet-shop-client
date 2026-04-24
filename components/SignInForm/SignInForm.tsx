"use client";

import { login } from "@/lib/auth";
import { useAuthStore } from "@/stores/authStore";
import { User } from "@/types/user";
import { useMutation } from "@tanstack/react-query";
import { Field, Form, Formik } from "formik";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import * as Yup from "yup";
import { ApiError } from "@/app/api/api";

interface FormValues {
  email: string;
  password: string;
}

const initialValues: FormValues = {
  email: "",
  password: "",
};

const LoginSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required!"),
  password: Yup.string().required("Password is required"),
});

export default function SignInForm({
  onModalClose,
}: {
  onModalClose?: () => void;
}) {
  const router = useRouter();
  const setUser = useAuthStore((state) => state.setUser);
  const searchParams = useSearchParams();
  const from = searchParams.get("from") || "/";

  const { mutate, isPending } = useMutation({
    mutationFn: login,
    onSuccess: (user: User) => {
      setUser(user);
      onModalClose?.();
    },
    onError: (error: ApiError) => {
      toast.error(error.response?.data?.message || "Login failed");
    },
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(data) => mutate(data)}
      validationSchema={LoginSchema}
    >
      <Form>
        <Field type="email" name="email" />
        <Field type="password" name="password" />

        <button type="submit" disabled={isPending}>
          {isPending ? "Loading..." : "Submit"}
        </button>
        <p>
          Don&apos;t have an account?{" "}
          <button
            type="button"
            onClick={() => {
              onModalClose?.();
              router.push(`/sign-up?from=${encodeURIComponent(from)}`);
              router.refresh();
            }}
          >
            Sign up
          </button>
        </p>
      </Form>
    </Formik>
  );
}
