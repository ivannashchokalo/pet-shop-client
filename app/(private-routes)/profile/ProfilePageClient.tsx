"use client";

import { deleteUserRequest, fetchUserRequests } from "@/lib/requestsClient";
import { useAuthStore } from "@/stores/authStore";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProfilePageClient() {
  const queryClient = useQueryClient();
  const [requestToDelete, setRequestToDelete] = useState("");

  const user = useAuthStore((state) => state.user);

  const { data } = useQuery({
    queryKey: ["user-requests"],
    queryFn: fetchUserRequests,
  });

  const { mutate: deleteRequest, isPending } = useMutation({
    mutationFn: deleteUserRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user-requests"],
      });
      setRequestToDelete("");
    },
  });

  const handleDelete = (id: string) => {
    setRequestToDelete(id);
    deleteRequest(id);
  };

  return (
    <>
      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>

      <h2>Your Orders</h2>
      {data && data.length > 0 ? (
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
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
                disabled={
                  request.status !== "new" ||
                  (isPending && requestToDelete === request._id)
                }
                type="button"
                onClick={() => {
                  handleDelete(request._id);
                }}
              >
                Cancel reservation
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No orders</p>
      )}
      <button type="button">Change Name</button>
      <button type="button">Change Password</button>
    </>
  );
}
