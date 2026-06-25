"use client";

import { createRequest } from "@/lib/api/client/requestsClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import Link from "next/link";
import { useAuthStore } from "@/lib/stores/authStore";

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

interface Props {
  animalId: string;
}

export default function AnimalReservationForm({ animalId }: Props) {
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

    onError: (error) => {
      console.log("Request error:", error);
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

    mutate(payload);
    actions.resetForm();
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
      <Form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 15,
          border: "1px solid black",
          padding: 20,
          width: "fit-content",
        }}
      >
        <label htmlFor="name">Full name</label>
        <Field
          id="name"
          type="text"
          name="customerName"
          placeholder="Enter your full name"
        />

        <label htmlFor="phone">Phone number</label>
        <Field
          id="phone"
          type="tel"
          name="phone"
          placeholder="Enter your phone number"
        />

        <label htmlFor="email">Email</label>
        <Field
          id="email"
          type="email"
          name="email"
          placeholder="Enter your email"
          readOnly={!!user}
        />

        <label htmlFor="message">Message</label>
        <Field
          as="textarea"
          id="message"
          name="message"
          placeholder="Additional message"
        />
        <fieldset>
          <legend>Preferred contact method</legend>

          <label>
            <Field type="radio" name="contactMethod" value="phone" />
            Phone
          </label>

          <label>
            <Field type="radio" name="contactMethod" value="email" />
            Email
          </label>
        </fieldset>

        <button type="submit">Reserve</button>
      </Form>
    </Formik>
  );
}
