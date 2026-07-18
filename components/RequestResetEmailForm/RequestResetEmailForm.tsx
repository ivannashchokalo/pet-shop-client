"use client";

import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";

interface FormValues {
  email: string;
}

interface RequestResetEmailFormProps {
  onSubmit: (values: FormValues) => void;
  isPending: boolean;
}

const RequestResetEmailSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required"),
});

const initialValues: FormValues = {
  email: "",
};

export default function RequestResetEmailForm({
  onSubmit,
  isPending,
}: RequestResetEmailFormProps) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RequestResetEmailSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form className="mx-auto flex flex-col items-center gap-6">
          <div className="relative w-full">
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              hasError={!!(touched.email && errors.email)}
            />
            <ErrorMessage
              name="email"
              component="p"
              className="absolute left-4 -bottom-4 text-[12px] text-red-500"
            />
          </div>

          <Button
            type="submit"
            className="min-w-[120px] py-2 px-8 font-medium text-[16px]"
            disabled={isPending}
          >
            {isPending ? <Loader iconColor="fill-[#323f50]" /> : "Send"}
          </Button>
        </Form>
      )}
    </Formik>
  );
}
