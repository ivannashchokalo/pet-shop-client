"use client";

import { createRequest } from "@/lib/api/client/requestsClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  ErrorMessage,
  Field,
  FieldProps,
  Form,
  Formik,
  FormikHelpers,
} from "formik";
import { useState } from "react";
import * as Yup from "yup";
import Link from "next/link";
import { useAuthStore } from "@/lib/stores/authStore";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { toast } from "sonner";

interface FormValues {
  customerName: string;
  phone: string;
  email: string;
  message: string;
  contactMethod: "phone" | "email";
}

const ReservationSchema = Yup.object({
  customerName: Yup.string()
    .min(2, "Too short")
    .max(50, "Too long")
    .required("Required"),

  phone: Yup.string().min(8, "Too short").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string().max(300, "Too long"),
});

interface AnimalReservationFormProps {
  animalId: string;
}

// styles
const fieldWrapperClass = "relative flex flex-col gap-2 w-full";
const labelClass = "font-medium text-[16px] text-[#9db4d3]";
const errorMessageClass = "absolute left-4 -bottom-4 text-[12px] text-red-500";

export default function AnimalReservationForm({
  animalId,
}: AnimalReservationFormProps) {
  const [isRegisteredModalOpen, setIsRegisteredModalOpen] = useState(false);
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false);
  const user = useAuthStore((state) => state.user);
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: createRequest,

    onSuccess: (data) => {
      if (data.isUserRegistered) {
        setIsRegisteredModalOpen(true);
      } else {
        setIsGuestModalOpen(true);
      }

      queryClient.invalidateQueries({
        queryKey: ["user-requests"],
      });
      queryClient.invalidateQueries({
        queryKey: ["animals"],
      });
    },

    onError: () => {
      toast.error("Something went wrong. Please try again.");
    },
  });

  const handleSubmit = (
    data: FormValues,
    actions: FormikHelpers<FormValues>,
  ) => {
    const payload = {
      animalId,
      ...data,
    };

    mutate(payload, {
      onSuccess: () => {
        actions.resetForm();
      },
    });
  };

  const initialValues: FormValues = {
    customerName: "",
    phone: "",
    email: user?.email || "",
    message: "",
    contactMethod: "phone",
  };

  if (isRegisteredModalOpen) {
    return (
      <p>
        Your reservation has been successfully submitted. Please wait for our
        team to contact you soon.
      </p>
    );
  }

  if (isGuestModalOpen) {
    return (
      <>
        <p>Your reservation has been successfully submitted.</p>

        <p>
          To track your reservations and manage your requests more easily,
          please <Link href="/sign-up">create an account</Link>
        </p>
      </>
    );
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ReservationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className="flex flex-col items-center gap-4 mx-auto">
          <h2 className="text-center font-bold text-[24px] text-[#85a3c9] xl:text-[28px]">
            Pet reservation form
          </h2>
          <div className={fieldWrapperClass}>
            <label htmlFor="name" className={labelClass}>
              Full name:<span className="text-red-500">*</span>
            </label>
            <Input
              id="name"
              type="text"
              name="customerName"
              placeholder="Enter your full name"
              hasError={!!(errors.customerName && touched.customerName)}
            />
            <ErrorMessage
              name="customerName"
              component="p"
              className={errorMessageClass}
            />
          </div>
          <div className={fieldWrapperClass}>
            <label htmlFor="phone" className={labelClass}>
              Phone number:<span className="text-red-500">*</span>
            </label>
            <Input
              id="phone"
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              hasError={!!(errors.phone && touched.phone)}
            />
            <ErrorMessage
              name="phone"
              component="p"
              className={errorMessageClass}
            />
          </div>
          <div className={fieldWrapperClass}>
            <label htmlFor="email" className={labelClass}>
              Email:<span className="text-red-500">*</span>
            </label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              readOnly={!!user}
              hasError={!!(errors.email && touched.email)}
            />
            <ErrorMessage
              name="email"
              component="p"
              className={errorMessageClass}
            />
          </div>
          <div className={fieldWrapperClass}>
            <label htmlFor="message" className={labelClass}>
              Message:
            </label>
            <Field
              as="textarea"
              id="message"
              name="message"
              placeholder="Additional message"
              className="w-full resize-none h-[100px] rounded-[20px] border border-[#a2a2a2] bg-transparent px-4 py-3 text-[#151c26] placeholder:text-[#a2a2a2] focus:border-[#aad2f2] focus:outline-none md:w-[350px]"
            />
          </div>

          <fieldset className="flex flex-col gap-3 w-full">
            <legend className="mb-4 font-medium text-[16px] text-[#9db4d3]">
              Preferred contact method:
            </legend>

            <div className="flex items-center gap-4 w-full">
              <label className="flex cursor-pointer items-center gap-3 group">
                <Field type="radio" name="contactMethod" value="phone">
                  {({ field }: FieldProps) => (
                    <>
                      <input {...field} type="radio" className="sr-only" />

                      <div
                        className={`flex h-5 w-5 items-center justify-center rounded-full border-[3px] group-hover:border-[#aad2f2] ${
                          field.checked
                            ? "border-[#aad2f2]"
                            : "border-[#a2a2a2]"
                        }`}
                      >
                        {field.checked && (
                          <div className="h-2 w-2 rounded-full bg-[#aad2f2]" />
                        )}
                      </div>

                      <span className="font-medium text-[16px] text-[#151c26]">
                        Phone
                      </span>
                    </>
                  )}
                </Field>
              </label>

              <label className="flex cursor-pointer items-center gap-3 group">
                <Field type="radio" name="contactMethod" value="email">
                  {({ field }: FieldProps) => (
                    <>
                      <input {...field} type="radio" className="sr-only" />

                      <div
                        className={`flex h-5 w-5 items-center justify-center rounded-full border-[3px] group-hover:border-[#aad2f2] ${
                          field.checked
                            ? "border-[#aad2f2]"
                            : "border-[#a2a2a2]"
                        }`}
                      >
                        {field.checked && (
                          <div className="h-2 w-2 rounded-full bg-[#aad2f2]" />
                        )}
                      </div>

                      <span className="font-medium text-[16px] text-[#151c26]">
                        Email
                      </span>
                    </>
                  )}
                </Field>
              </label>
            </div>
          </fieldset>

          <Button type="submit" className="py-2 px-8">
            Reserve
          </Button>
        </Form>
      )}
    </Formik>
  );
}
