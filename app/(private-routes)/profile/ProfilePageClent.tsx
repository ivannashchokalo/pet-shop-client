"use client";

import { deleteUserRequest, fetchUserRequests } from "@/lib/requestsClient";
import { useAuthStore } from "@/stores/authStore";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

export default function ProfilePageClient() {
  const queryClient = useQueryClient();

  const user = useAuthStore((state) => state.user);
  const { data, error, isLoading } = useQuery({
    queryKey: ["user-requests"],
    queryFn: fetchUserRequests,
    refetchOnMount: false,
  });

  const { mutate: deleteRequest, isPending } = useMutation({
    mutationFn: deleteUserRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user-requests"],
      });
    },
  });

  return (
    <>
      <h1>Profile</h1>

      <section>
        <h2>Personal Information</h2>
        <p>Name: </p>
        <p>Email: {user?.email}</p>
        <p>Edit</p>
      </section>

      <section>
        <h2>Your Orders</h2>
        {data && data.length > 0 ? (
          <ul>
            {data.map((request) => (
              <li key={request._id}>
                <p>Order #: {request._id}</p>
                <Link
                  href={`/animals/${request.animalId.type}/${request.animalId._id}`}
                >
                  <p>
                    Animal:{" "}
                    {`${request.animalId.type} - ${request.animalId.name}`}
                  </p>
                  <Image
                    src={request.animalId.images[0]}
                    alt={request.animalId.name}
                    width={300}
                    height={400}
                  />
                </Link>

                <p>Status: {request.status}</p>
                <p>Date: {new Date(request.createdAt).toLocaleDateString()}</p>
                <button
                  disabled={isPending || request.status !== "new"}
                  type="button"
                  onClick={() => {
                    deleteRequest(request._id);
                  }}
                >
                  Cancel Request
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No orders</p>
        )}
      </section>

      <section>
        <h2>Security</h2>
        <button type="button">Change Password</button>
      </section>

      <button type="button">Logout</button>
    </>
  );
}
