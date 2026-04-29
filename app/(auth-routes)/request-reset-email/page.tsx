"use client";

import { requestResetEmail } from "@/lib/auth";
import { useMutation } from "@tanstack/react-query";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

interface FormValues {
  email: string;
}

const RequestResetEmailSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required"),
});

export default function RequestResetEmail() {
  const initialValues: FormValues = {
    email: "",
  };

  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: requestResetEmail,

    onSuccess: () => {
      console.log("Reset email sent successfully");
    },

    onError: (error) => {
      console.log("Request reset email error:", error);
    },
  });

  if (isSuccess) {
    return (
      <div>
        <h2>Check your email</h2>
        <p>We have sent password reset instructions to your email address.</p>
      </div>
    );
  }

  return (
    <>
      <h2>Forgot Password</h2>
      <p>
        Enter your email and we will send you a link to reset your password.
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={RequestResetEmailSchema}
        onSubmit={(values) => mutate(values)}
      >
        <Form>
          <label htmlFor="email">Email</label>

          <Field
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
          />

          <button type="submit" disabled={isPending}>
            {isPending ? "Sending..." : "Send reset link"}
          </button>
        </Form>
      </Formik>
    </>
  );
}
