"use client";

import { resetPassword } from "@/lib/api/client/auth";
import { useMutation } from "@tanstack/react-query";
import { Field, Form, Formik } from "formik";
import { useSearchParams, useRouter } from "next/navigation";
import * as Yup from "yup";

interface FormValues {
  password: string;
  confirmPassword: string;
}

const ResetPasswordSchema = Yup.object({
  password: Yup.string().min(8, "Password is too short").required("Required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Required"),
});

export default function ResetPassword() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const token = searchParams.get("token") || "";

  const initialValues: FormValues = {
    password: "",
    confirmPassword: "",
  };

  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: resetPassword,

    onSuccess: () => {
      console.log("Password reset successfully");
    },

    onError: (error) => {
      console.log("Reset password error:", error);
    },
  });

  if (isSuccess) {
    return (
      <div>
        <h2>Password updated</h2>

        <p>Your password has been reset successfully.</p>

        <button type="button" onClick={() => router.push("/sign-in")}>
          Go to Login
        </button>
      </div>
    );
  }

  return (
    <>
      <h2>Reset Password</h2>

      <p>Enter your new password below.</p>

      <Formik
        initialValues={initialValues}
        validationSchema={ResetPasswordSchema}
        onSubmit={(values) =>
          mutate({
            password: values.password,
            token,
          })
        }
      >
        <Form>
          <label htmlFor="password">New Password</label>

          <Field
            id="password"
            type="password"
            name="password"
            placeholder="Enter new password"
          />

          <label htmlFor="confirmPassword">Confirm Password</label>

          <Field
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            placeholder="Confirm new password"
          />

          <button type="submit" disabled={isPending}>
            {isPending ? "Saving..." : "Reset Password"}
          </button>
        </Form>
      </Formik>
    </>
  );
}
