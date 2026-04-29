"use client";

import { login } from "@/lib/auth";
import { useAuthStore } from "@/stores/authStore";
import { User } from "@/types/user";
import { useMutation } from "@tanstack/react-query";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
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
  fromPath,
}: {
  onModalClose?: () => void;
  fromPath?: string;
}) {
  const router = useRouter();
  const setUser = useAuthStore((state) => state.setUser);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const from = `${pathname}?${searchParams.toString()}`;

  const { mutate, isPending } = useMutation({
    mutationFn: login,
    onSuccess: (user: User) => {
      setUser(user);
      onModalClose?.();

      if (fromPath) router.push(fromPath);
    },
    onError: (error: ApiError) => {
      toast.error(error.response?.data?.message || "Login failed");
    },
  });

  const handleSubmit = (
    data: FormValues,
    actions: FormikHelpers<FormValues>,
  ) => {
    mutate(data);
    actions.resetForm();

    if (!onModalClose) {
      router.push("/");
    }
  };

  const handleForgotPasswordClick = () => {
    onModalClose?.();
    router.push("/request-reset-email");
  };

  const hadleSignUpClick = () => {
    onModalClose?.();

    if (fromPath) {
      router.push(`/sign-up?from=${encodeURIComponent(fromPath)}`);
    } else {
      router.push(`/sign-up?from=${encodeURIComponent(from)}`);
    }

    router.refresh();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={LoginSchema}
    >
      <Form>
        <Field type="email" name="email" />
        <Field type="password" name="password" />

        <button type="button" onClick={handleForgotPasswordClick}>
          Forgot password?
        </button>

        <button type="submit" disabled={isPending}>
          {isPending ? "Loading..." : "Login"}
        </button>
        <p>
          Don&apos;t have an account?{" "}
          <button type="button" onClick={hadleSignUpClick}>
            Sign up
          </button>
        </p>
      </Form>
    </Formik>
  );
}
