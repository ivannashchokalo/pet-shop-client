"use client";

import { login } from "@/lib/api/client/auth";
import { useAuthStore } from "@/lib/stores/authStore";
import { User } from "@/types/user";
import { useMutation } from "@tanstack/react-query";
import { ErrorMessage, Form, Formik, FormikHelpers } from "formik";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import * as Yup from "yup";
import { ApiError } from "@/app/api/api";
import { Input } from "../Input/Input";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";

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
    <>
      <p className="mx-auto mb-6 font-medium text-[20px] text-[#576b86]">
        Sign in to your account
      </p>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={LoginSchema}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col items-center gap-6 mx-auto">
            <div className="relative w-full">
              <label
                htmlFor="email"
                className="block mb-1 font-medium text-[16px] text-[#0c1118]"
              >
                Email:
              </label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                hasError={!!(errors.email && touched.email)}
              />
              <ErrorMessage
                name="email"
                component="p"
                className="absolute left-4 -bottom-4 text-[12px] text-red-500"
              />
            </div>
            <div className="relative w-full">
              <label
                htmlFor="password"
                className="block mb-1 font-medium text-[16px]  text-[#0c1118]"
              >
                Password:
              </label>
              <Input
                type="password"
                name="password"
                placeholder="Enter your password"
                hasError={!!(errors.password && touched.password)}
              />
              <ErrorMessage
                name="password"
                component="p"
                className="absolute left-4 -bottom-4 text-[12px] text-red-500"
              />
            </div>
            <button
              type="button"
              onClick={handleForgotPasswordClick}
              className="font-medium text-[14px] text-[#9db4d3]"
            >
              Forgot password?
            </button>

            <Button type="submit" disabled={isPending} className="py-2 px-8">
              {isPending ? <Loader /> : "Login"}
            </Button>
            <p className="flex items-center gap-1 font-medium text-[14px] text-[#9db4d3]">
              Don&apos;t have an account?
              <button
                type="button"
                onClick={hadleSignUpClick}
                className="underline hover:text-[#85a3c9] focus-visible:text-[#85a3c9]"
              >
                Sign up
              </button>
            </p>
          </Form>
        )}
      </Formik>
    </>
  );
}
