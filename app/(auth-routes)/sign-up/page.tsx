"use client";

import { ApiError } from "@/app/api/api";
import { register } from "@/lib/api/client/auth";
import { useAuthStore } from "@/lib/stores/authStore";
import { User } from "@/types/user";
import { useMutation } from "@tanstack/react-query";
import { Field, Form, Formik } from "formik";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import * as Yup from "yup";

interface FormValues {
  name: string;
  email: string;
  password: string;
}

const RegisterSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required!"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

export default function SignUp() {
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

  const initialValues: FormValues = {
    name: "",
    email: "",
    password: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(data) => mutate(data)}
      validationSchema={RegisterSchema}
    >
      <Form>
        <Field type="text" name="name" />
        <Field type="email" name="email" />
        <Field type="password" name="password" />

        <button type="submit" disabled={isPending}>
          {isPending ? "Creating account..." : "Sign up"}
        </button>
      </Form>
    </Formik>
  );
}
