"use client";

import { changeName, changePassword } from "@/lib/usersService";
import { useAuthStore } from "@/stores/authStore";
import { UserName } from "@/types/user";
import { useMutation } from "@tanstack/react-query";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { toast } from "sonner";
import * as Yup from "yup";

interface ChangePasswordValues {
  oldPassword: string;
  newPassword: string;
}

interface ChangeNameValues {
  name: UserName;
}

const passwordInitialValues: ChangePasswordValues = {
  oldPassword: "",
  newPassword: "",
};

const nameInitialValues: ChangeNameValues = {
  name: "",
};

const passwordValidationSchema = Yup.object({
  oldPassword: Yup.string().required("Old password is required"),
  newPassword: Yup.string()
    .min(8, "New password must be at least 8 characters")
    .required("New password is required"),
});

const nameValidationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
});

export default function Settings() {
  const setUser = useAuthStore((state) => state.setUser);

  const { mutate: passwordMutation } = useMutation({
    mutationFn: changePassword,
    onSuccess: () => {
      toast.success("Password successfully changed");
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });

  const { mutate: nameMutation } = useMutation({
    mutationFn: changeName,
    onSuccess: (user) => {
      toast.success("Name successfully changed");
      setUser(user);
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });

  const handlePasswordSubmit = (
    values: ChangePasswordValues,
    actions: FormikHelpers<ChangePasswordValues>,
  ) => {
    passwordMutation(values);
    actions.resetForm();
  };

  const handleNameSubmit = (
    values: ChangeNameValues,
    actions: FormikHelpers<ChangeNameValues>,
  ) => {
    nameMutation(values);
    actions.resetForm();
  };

  return (
    <div>
      <h1>Settings</h1>

      <section>
        <h2>Change Name</h2>

        <Formik<ChangeNameValues>
          initialValues={nameInitialValues}
          validationSchema={nameValidationSchema}
          onSubmit={handleNameSubmit}
        >
          <Form>
            <div>
              <label htmlFor="name">New name</label>
              <Field
                type="text"
                name="name"
                id="name"
                placeholder="Enter new name"
              />
            </div>

            <button type="submit">Change name</button>
          </Form>
        </Formik>
      </section>

      <section>
        <h2>Change Password</h2>

        <Formik<ChangePasswordValues>
          initialValues={passwordInitialValues}
          validationSchema={passwordValidationSchema}
          onSubmit={handlePasswordSubmit}
        >
          <Form>
            <div>
              <label htmlFor="oldPassword">Old password</label>
              <Field
                type="password"
                name="oldPassword"
                id="oldPassword"
                placeholder="Enter old password"
              />
            </div>

            <div>
              <label htmlFor="newPassword">New password</label>
              <Field
                type="password"
                name="newPassword"
                id="newPassword"
                placeholder="Enter new password"
              />
            </div>

            <button type="submit">Change password</button>
          </Form>
        </Formik>
      </section>
    </div>
  );
}
