"use client";

import { ApiError } from "@/app/api/api";
import { register } from "@/lib/api/client/auth";
import { useAuthStore } from "@/lib/stores/authStore";
import { User } from "@/types/user";
import { useMutation } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import * as Yup from "yup";
import { ErrorMessage, Form, Formik } from "formik";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";

interface FormValues {
  name: string;
  email: string;
  password: string;
}

const initialValues: FormValues = {
  name: "",
  email: "",
  password: "",
};

const RegisterSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required!"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

export default function SignUpForm() {
  const router = useRouter();
  const setUser = useAuthStore((state) => state.setUser);
  const searchParams = useSearchParams();

  const from = searchParams.get("from") || "/";

  const { mutate, isPending } = useMutation({
    mutationFn: register,
    onSuccess: (user: User) => {
      setUser(user);
      router.replace(from);
    },
    onError: (error: ApiError) => {
      toast.error(error.response?.data?.message || "Registration failed");
    },
  });

  return (
    <>
      <p className="mx-auto mb-6 font-medium text-[20px] text-[#576b86]">
        Create your account
      </p>
      <Formik
        initialValues={initialValues}
        onSubmit={(data) => mutate(data)}
        validationSchema={RegisterSchema}
      >
        {({ errors, touched }) => (
          <Form className="mx-auto flex flex-col items-center gap-6">
            <div className="relative w-full">
              <label
                htmlFor="name"
                className="mb-1 block text-[16px] font-medium text-[var(--text-secondary)]"
              >
                Name:
              </label>
              <Input type="text" name="name" placeholder="Enter your name" />
              <ErrorMessage
                name="name"
                component="p"
                className="absolute left-4 -bottom-4 text-[12px] text-red-500"
              />
            </div>

            <div className="relative w-full">
              <label
                htmlFor="email"
                className="mb-1 block text-[16px] font-medium text-[var(--text-secondary)]"
              >
                Email:<span className="text-red-500">*</span>
              </label>
              <Input
                id="email"
                type="email"
                name="email"
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
                className="mb-1 block text-[16px] font-medium text-[var(--text-secondary)]"
              >
                Password:<span className="text-red-500">*</span>
              </label>
              <Input
                type="password"
                name="password"
                placeholder="Create a password*"
                hasError={!!(errors.password && touched.password)}
              />
              <ErrorMessage
                name="password"
                component="p"
                className="absolute left-4 -bottom-4 text-[12px] text-red-500"
              />
            </div>

            <Button
              type="submit"
              disabled={isPending}
              className="min-w-[150px] py-2 px-6"
            >
              {isPending ? <Loader iconColor="fill-[#323f50]" /> : "Sign up"}
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}
