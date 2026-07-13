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

  return (
    <>
      <div className="flex items-center justify-between mb-[40px]">
        <div>
          <h1 className="mb-[8px] font-semibold text-[24px] leading-[1.5] text-[#151c26] md:text-[32px]">
            Favorites
          </h1>
          <p className="font-medium text-[14px] leading-[1.5] text-[#323f50] md:text-[16px]">
            You saved {data?.length} favorite animals
          </p>
        </div>
        <Button
          disabled={data?.length < 1}
          type="button"
          onClick={() => mutate()}
          className="px-6 py-[10px] gap-[8px] rext-4 text-[#323f50] weight-medium leading-[1.5] text-center"
        >
          <Icon name="trash" className="fill-[#323f50]" />
          Clear all
        </Button>
      </div>
      {data?.length > 0 && <AnimalsList animals={data} />}
    </>
  );
}
