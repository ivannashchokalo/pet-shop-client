import {
  addToFavorites,
  removeFromFavorites,
} from "@/lib/api/client/usersClient";
import { useAuthStore } from "@/lib/stores/authStore";
import { AnimalId } from "@/types/animal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export default function useFavorites() {
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const queryClient = useQueryClient();

  const addMutation = useMutation({
    mutationFn: addToFavorites,
    onSuccess: async ({ user }) => {
      console.log("updated user", user);
      setUser(user);
      console.log(useAuthStore.getState().user);

      // queryClient.invalidateQueries({ queryKey: ["favorites"] });
      // queryClient.invalidateQueries({ queryKey: ["animals"] });
      queryClient.invalidateQueries({ queryKey: ["favoriteAnimals"] });
    },
  });

  const removeMutation = useMutation({
    mutationFn: removeFromFavorites,
    onSuccess: async ({ user }) => {
      setUser(user);

      // queryClient.invalidateQueries({ queryKey: ["favorites"] });
      // queryClient.invalidateQueries({ queryKey: ["animals"] });
      queryClient.invalidateQueries({ queryKey: ["favoriteAnimals"] });
    },
  });

  const handleFavoriteClick = (animalId: AnimalId) => {
    if (!isAuthenticated) {
      setIsLoginModalOpen(true);
      return;
    }

    const isFavorite = user?.favorites.includes(animalId);

    if (isFavorite) {
      removeMutation.mutate(animalId);
    } else {
      addMutation.mutate(animalId);
    }
  };

  return {
    handleFavoriteClick,
    isLoginModalOpen,
    setIsLoginModalOpen,
  };
}
