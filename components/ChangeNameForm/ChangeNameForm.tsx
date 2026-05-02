"use client";

import { changeName } from "@/lib/api/client/usersService";
import { useAuthStore } from "@/lib/stores/authStore";
import { UserName } from "@/types/user";
import { useMutation } from "@tanstack/react-query";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { toast } from "sonner";
import * as Yup from "yup";

interface ChangeNameValues {
  name: UserName;
}

const initialValues: ChangeNameValues = {
  name: "",
};

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
});

export function ChangeNameForm() {
  const setUser = useAuthStore((state) => state.setUser);

  const { mutate } = useMutation({
    mutationFn: changeName,
    onSuccess: (user) => {
      toast.success("Name successfully changed");
      setUser(user);
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });

  const handleSubmit = (
    values: ChangeNameValues,
    actions: FormikHelpers<ChangeNameValues>,
  ) => {
    mutate(values);
    actions.resetForm();
  };

  return (
    <section>
      <h2>Change Name</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label htmlFor="name">New name</label>
          <Field name="name" type="text" placeholder="Enter new name" />

          <button type="submit">Change name</button>
        </Form>
      </Formik>
    </section>
  );
}
