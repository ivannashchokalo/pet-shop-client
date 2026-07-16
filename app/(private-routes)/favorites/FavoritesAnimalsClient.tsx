"use client";

import Button from "../../../components/Button/Button";
import AnimalsList from "@/components/AnimalsList/AnimalsList";
import Icon from "@/components/Icon/Icon";
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

  const favoritesCount = data?.length ?? 0;

  return (
    <>
      <div className="mb-10 flex items-center justify-between">
        <div>
          <h1 className="mb-2 font-semibold text-[24px] text-[#151c26] md:text-[32px]">
            Favorites
          </h1>
          <p className="font-medium text-[14px] text-[#323f50] md:text-[16px]">
            You saved {favoritesCount} favorite animals
          </p>
        </div>
        <Button
          disabled={data?.length < 1}
          type="button"
          onClick={mutate}
          className="gap-2 px-6 py-[10px] font-medium text-[#323f50]"
        >
          <Icon name="trash" className="fill-[#323f50]" />
          Clear all
        </Button>
      </div>
      {data?.length > 0 && <AnimalsList animals={data} />}
    </>
  );
}
