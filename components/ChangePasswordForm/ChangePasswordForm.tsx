"use client";

import { changePassword } from "@/lib/api/client/usersService";
import { useMutation } from "@tanstack/react-query";
import { Form, Formik, FormikHelpers } from "formik";
import { toast } from "sonner";
import * as Yup from "yup";
import { Input } from "../Input/Input";
import Button from "../Button/Button";

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
    <div className="flex flex-col items-center gap-6">
      <h2 className="font-semibold text-[24px] text-[#151c26]">
        Change password
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col items-center gap-6 w-full">
          <label htmlFor="oldPassword" className="w-full">
            <Input
              name="oldPassword"
              type="password"
              placeholder="Enter old password"
            />
          </label>

          <label htmlFor="newPassword" className="w-full">
            <Input
              name="newPassword"
              type="password"
              placeholder="Enter new password"
            />
          </label>
          <Button type="submit" className="py-2 px-4">
            Change password{" "}
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
