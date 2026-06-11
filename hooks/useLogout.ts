"use client";

import { logout } from "@/lib/api/client/auth";
import { useAuthStore } from "@/lib/stores/authStore";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function useLogout() {
  const router = useRouter();

  const clearIsAuthenticated = useAuthStore(
    (state) => state.clearIsAuthenticated,
  );

  const { mutate, isPending } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      clearIsAuthenticated();
      router.replace("/sign-in");
      router.refresh();
    },
    onError: () => {
      toast.error("Logout failed");
    },
  });

  return {
    logout: mutate,
    isPending,
  };
}
