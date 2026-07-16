"use client";

import { changeName } from "@/lib/api/client/usersClient";
import { useAuthStore } from "@/lib/stores/authStore";
import { UserName } from "@/types/user";
import { useMutation } from "@tanstack/react-query";
import { Form, Formik, FormikHelpers } from "formik";
import { toast } from "sonner";
import * as Yup from "yup";
import Button from "../Button/Button";
import Input from "../Input/Input";

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

  const { mutate, isPending } = useMutation({
    mutationFn: changeName,
    onSuccess: (user) => {
      toast.success("Name successfully changed");
      setUser(user);
    },
    onError: () => {
      toast.error("Failed to change name. Please try again.");
    },
  });

  const handleSubmit = (
    values: ChangeNameValues,
    actions: FormikHelpers<ChangeNameValues>,
  ) => {
    mutate(values, {
      onSuccess: () => {
        actions.resetForm();
      },
    });
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <h2 className="font-semibold text-[24px] text-[#151c26]">Change name</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col items-center gap-6 w-full">
          <Input name="name" type="text" placeholder="Enter new name" />
          <Button
            type="submit"
            className="min-w-[180px] py-2 px-4"
            disabled={isPending}
          >
            {isPending ? "Changing..." : "Change name"}
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
