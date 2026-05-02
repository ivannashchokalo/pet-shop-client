"use client";

import { changePassword } from "@/lib/api/client/usersService";
import { useMutation } from "@tanstack/react-query";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { toast } from "sonner";
import * as Yup from "yup";

interface ChangePasswordValues {
  oldPassword: string;
  newPassword: string;
}

const initialValues: ChangePasswordValues = {
  oldPassword: "",
  newPassword: "",
};

const validationSchema = Yup.object({
  oldPassword: Yup.string().required("Old password is required"),
  newPassword: Yup.string()
    .min(8, "New password must be at least 8 characters")
    .required("New password is required"),
});

export function ChangePasswordForm() {
  const { mutate } = useMutation({
    mutationFn: changePassword,
    onSuccess: () => {
      toast.success("Password successfully changed");
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });

  const handleSubmit = (
    values: ChangePasswordValues,
    actions: FormikHelpers<ChangePasswordValues>,
  ) => {
    mutate(values);
    actions.resetForm();
  };

  return (
    <section>
      <h2>Change Password</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label htmlFor="oldPassword">Old password</label>
          <Field name="oldPassword" type="password" />

          <label htmlFor="newPassword">New password</label>
          <Field name="newPassword" type="password" />

          <button type="submit">Change password</button>
        </Form>
      </Formik>
    </section>
  );
}
