"use client";

import { DEFAULT_PET } from "@/constants/images";
import { Animal, AnimalId } from "@/types/animal";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addToFavorites,
  // getFavorites,
  removeFromFavorites,
} from "@/lib/api/client/usersService";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/lib/stores/authStore";
import { getMe } from "@/lib/api/client/auth";
import { useState } from "react";
import Modal from "../Modal/Modal";
import SignInForm from "../SignInForm/SignInForm";
import { fetchUserRequests } from "@/lib/api/client/requestsClient";

interface AnimalsListProps {
  animals: Animal[];
}

export default function AnimalsList({ animals }: AnimalsListProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const from = `${pathname}?${searchParams.toString()}`;
  const router = useRouter();
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
      queryClient.invalidateQueries({
        queryKey: ["favorites"],
      });

      queryClient.invalidateQueries({
        queryKey: ["animals"],
      });
      queryClient.invalidateQueries({
        queryKey: ["favoriteAnimals"],
      });
      const updatedUser = await getMe();
      setUser(updatedUser);
    },
  });

  const removeMutation = useMutation({
    mutationFn: removeFromFavorites,
    onSuccess: async () => {
      queryClient.invalidateQueries({
        queryKey: ["favorites"],
      });
      queryClient.invalidateQueries({
        queryKey: ["animals"],
      });
      queryClient.invalidateQueries({
        queryKey: ["favoriteAnimals"],
      });
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
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 24,
        }}
      >
        {animals.map((animal) => {
          const isFavorite = user?.favorites.includes(animal._id);
          const isReserved = userRequests?.some(
            (request) => request.animalId._id === animal._id,
          );

          return (
            <li key={animal._id}>
              <Link
                href={`/animals/${animal.type}/${animal._id}?from=${encodeURIComponent(
                  from,
                )}`}
              >
                <div>
                  <Image
                    src={animal.images[0] || DEFAULT_PET}
                    alt={`${animal.type} ${animal.name}`}
                    width={300}
                    height={400}
                  />
                </div>

                <div>
                  <div>
                    <h2>{animal.name}</h2>
                    <p>{animal.price && `$${animal.price}`}</p>
                  </div>

                  <p>{animal.breed}</p>

                  <p>
                    {animal.sex
                      ? animal.sex.charAt(0).toUpperCase() + animal.sex.slice(1)
                      : ""}
                  </p>

                  <p>
                    {animal.status.charAt(0).toUpperCase() +
                      animal.status.slice(1)}
                  </p>
                </div>
              </Link>

              <button
                type="button"
                onClick={() => handleFavoriteClick(animal._id)}
              >
                {isFavorite ? "-" : "+"}
              </button>

              <button
                type="button"
                onClick={() =>
                  router.push(`/animals/reserve/${animal._id}?from=${from}`)
                }
                disabled={isReserved}
              >
                {isReserved ? "Reserved" : "Reserve"}
              </button>
            </li>
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
