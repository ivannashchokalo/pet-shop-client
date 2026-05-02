"use client";

import AnimalsList from "@/components/AnimalsList/AnimalsList";
import {
  clearFavorites,
  fetchFavoriteAnimals,
} from "@/lib/api/client/usersService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export default function FavoritesAnimalsClient() {
  const { data } = useQuery({
    queryKey: ["favoriteAnimals"],
    queryFn: fetchFavoriteAnimals,
  });

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: clearFavorites,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["favorites"],
      });

      queryClient.invalidateQueries({
        queryKey: ["favoriteAnimals"],
      });
    },
  });

  return (
    <>
      <div>
        <button
          disabled={data?.length < 1}
          type="button"
          onClick={() => mutate()}
        >
          Clear
        </button>
        {data?.length > 0 && <AnimalsList animals={data} />}
      </div>
    </>
  );
}
