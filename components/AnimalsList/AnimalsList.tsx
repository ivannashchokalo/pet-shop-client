"use client";

import { Animal } from "@/types/animal";
import { useAuthStore } from "@/lib/stores/authStore";
import Modal from "../Modal/Modal";
import SignInForm from "../SignInForm/SignInForm";
import AnimalCard from "../AnimalCard/AnimalCard";
import useFavorites from "@/hooks/useFavorites";

interface AnimalsListProps {
  animals: Animal[];
}

export default function AnimalsList({ animals }: AnimalsListProps) {
  const user = useAuthStore((state) => state.user);

  const { handleFavoriteClick, isLoginModalOpen, setIsLoginModalOpen } =
    useFavorites();

  return (
    <>
      <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {animals.map((animal) => {
          const isFavorite = user?.favorites.includes(animal._id) ?? false;

          return (
            <AnimalCard
              key={animal._id}
              animal={animal}
              isFavorite={isFavorite}
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
