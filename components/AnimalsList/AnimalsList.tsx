"use client";

import { Animal, AnimalId } from "@/types/animal";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addToFavorites,
  removeFromFavorites,
} from "@/lib/api/client/usersService";
import { useAuthStore } from "@/lib/stores/authStore";
import { getMe } from "@/lib/api/client/auth";
import { useState } from "react";
import Modal from "../Modal/Modal";
import SignInForm from "../SignInForm/SignInForm";
import { fetchUserRequests } from "@/lib/api/client/requestsClient";
import AnimalCard from "../AnimalCard/AnimalCard";

interface AnimalsListProps {
  animals: Animal[];
}

export default function AnimalsList({ animals }: AnimalsListProps) {
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const queryClient = useQueryClient();

  const { data: userRequests } = useQuery({
    queryKey: ["user-requests"],
    queryFn: fetchUserRequests,
  });

  const addMutation = useMutation({
    mutationFn: addToFavorites,
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["favorites"] });
      queryClient.invalidateQueries({ queryKey: ["animals"] });
      queryClient.invalidateQueries({ queryKey: ["favoriteAnimals"] });

      const updatedUser = await getMe();
      setUser(updatedUser);
    },
  });

  const removeMutation = useMutation({
    mutationFn: removeFromFavorites,
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["favorites"] });
      queryClient.invalidateQueries({ queryKey: ["animals"] });
      queryClient.invalidateQueries({ queryKey: ["favoriteAnimals"] });

      const updatedUser = await getMe();
      setUser(updatedUser);
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

  return (
    <>
      <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {animals.map((animal) => {
          const isFavorite = user?.favorites.includes(animal._id) ?? false;

          const isReserved =
            userRequests?.some(
              (request) => request.animalId._id === animal._id,
            ) ?? false;

          return (
            <AnimalCard
              key={animal._id}
              animal={animal}
              isFavorite={isFavorite}
              isReserved={isReserved}
              onFavoriteClick={handleFavoriteClick}
            />
          );
        })}
      </ul>

      {isLoginModalOpen && (
        <Modal onClose={() => setIsLoginModalOpen(false)}>
          <SignInForm onModalClose={() => setIsLoginModalOpen(false)} />
        </Modal>
      )}
    </>
  );
}
