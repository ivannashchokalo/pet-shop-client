"use client";

import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";

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

// styles
const labelStyles =
  "mb-1 block font-medium text-[16px] text-[var(--text-secondary)]";

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
      {({ errors, touched }) => (
        <Form className="mx-auto flex flex-col items-center gap-6">
          <div className="relative w-full">
            <label htmlFor="password" className={labelStyles}>
              New Password:
            </label>
            <Input
              id="password"
              type="password"
              name="password"
              placeholder="Enter new password"
              hasError={!!(touched.password && errors.password)}
            />
            <ErrorMessage
              name="password"
              component="p"
              className="absolute left-4 -bottom-4 text-[12px] text-red-500"
            />
          </div>

          <div className="relative w-full">
            <label htmlFor="confirmPassword" className={labelStyles}>
              Confirm Password:
            </label>

            <Input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              placeholder="Confirm new password"
              hasError={!!(touched.confirmPassword && errors.confirmPassword)}
            />
            <ErrorMessage
              name="confirmPassword"
              component="p"
              className="absolute left-4 -bottom-4 text-[12px] text-red-500"
            />
          </div>

          <Button
            type="submit"
            disabled={isPending}
            className="min-w-[195px] py-2 px-8 font-medium text-[16px]"
          >
            {isPending ? (
              <Loader iconColor="fill-[#323f50]" />
            ) : (
              "Reset Password"
            )}
          </Button>
        </Form>
      )}
    </Formik>
  );
}
