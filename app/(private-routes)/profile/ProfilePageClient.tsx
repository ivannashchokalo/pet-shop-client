"use client";

import Button from "@/components/Button/Button";
import OrdersList from "@/components/OrdersList/OrdersList";
import {
  deleteUserRequest,
  fetchUserRequests,
} from "@/lib/api/client/requestsClient";
import { useAuthStore } from "@/lib/stores/authStore";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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
      <div className="mb-10 flex flex-col items-start gap-6 md:flex-row md:justify-between">
        <div className="text-[#0c1118]">
          <p className="flex items-center gap-2 font-medium text-[20px]">
            Name:
            <span className="text-[16px]">{user?.name}</span>
          </p>
          <p className="flex items-center gap-2 font-medium text-[20px]">
            Email:
            <span className="text-[16px]">{user?.email}</span>
          </p>
        </div>
        <Button href="/profile/settings" className="py-3 px-5 font-medium">
          Settings
        </Button>
      </div>

      <h2 className="mb-8 font-semibold text-[24px] text-[#151c26] md:text-[32px]">
        Your Orders
      </h2>
      {data && data.length > 0 ? (
        <OrdersList
          requests={data}
          onDelete={handleDelete}
          isPending={isPending}
          requestToDelete={requestToDelete}
        />
      ) : (
        <p className="text-center text-[#9db4d3]">No orders</p>
      )}
    </>
  );
}
