"use client";

import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import { Input } from "../Input/Input";
import Button from "../Button/Button";

interface FormValues {
  password: string;
  confirmPassword: string;
}

interface ResetPasswordFormProps {
  isPending: boolean;
  onSubmit: (values: FormValues) => void;
}

const initialValues: FormValues = {
  password: "",
  confirmPassword: "",
};

const ResetPasswordSchema = Yup.object({
  password: Yup.string().min(8, "Password is too short").required("Required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Required"),
});

export default function ResetPasswordForm({
  isPending,
  onSubmit,
}: ResetPasswordFormProps) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ResetPasswordSchema}
      onSubmit={onSubmit}
    >
      <Form className="mx-auto flex flex-col items-center gap-6">
        <div className="relative w-full">
          <label
            htmlFor="password"
            className="block mb-1 font-medium text-[16px] text-[#0c1118]"
          >
            New Password:
          </label>
          <Input
            id="password"
            type="password"
            name="password"
            placeholder="Enter new password"
          />
          <ErrorMessage
            name="password"
            component="p"
            className="absolute left-4 -bottom-4 text-[12px] text-red-500"
          />
        </div>

        <div className="relative w-full">
          <label
            htmlFor="confirmPassword"
            className="block mb-1 font-medium text-[16px]  text-[#0c1118]"
          >
            Confirm Password:
          </label>

          <Input
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            placeholder="Confirm new password"
          />
          <ErrorMessage
            name="confirmPassword"
            component="p"
            className="absolute left-4 -bottom-4 text-[12px] text-red-500"
          />
        </div>

        <Button type="submit" disabled={isPending} className="py-2 px-8">
          {isPending ? "Resetting..." : "Reset Password"}
        </Button>
      </Form>
    </Formik>
  );
}
