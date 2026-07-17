"use client";

import Button from "../../../components/Button/Button";
import AnimalsList from "@/components/AnimalsList/AnimalsList";
import Icon from "@/components/Icon/Icon";
import {
  clearFavorites,
  fetchFavoriteAnimals,
} from "@/lib/api/client/usersClient";
import {
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

export default function FavoritesAnimalsClient() {
  const queryClient = useQueryClient();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["favoriteAnimals"],
      queryFn: fetchFavoriteAnimals,
      initialPageParam: 1,
      getNextPageParam: (lastPage) => {
        if (lastPage.page < lastPage.totalPages) {
          return lastPage.page + 1;
        }

        return undefined;
      },
    });

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

  const animals = data?.pages.flatMap((page) => page.animals) ?? [];

  const favoritesCount = data?.pages[0]?.totalItems ?? 0;
  return (
    <>
      <div className="mb-10 flex items-center justify-between">
        <div>
          <h1 className="mb-2 font-semibold text-[24px] text-[var(--text-main)] md:text-[32px]">
            Favorites
          </h1>
          <p className="font-medium text-[14px] text-[var(--text-secondary)] md:text-[16px]">
            You saved {favoritesCount} favorite animals
          </p>
        </div>
        <Button
          disabled={animals.length < 1}
          type="button"
          onClick={mutate}
          className="gap-2 px-6 py-[10px] font-medium text-[#323f50]"
        >
          <Icon name="trash" className="fill-[#323f50]" />
          Clear all
        </Button>
      </div>
      {animals.length > 0 && <AnimalsList animals={animals} />}
      {hasNextPage && (
        <Button
          type="button"
          variant="secondary"
          className="min-w-[150px] p-[10px] mx-auto mt-10"
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
        >
          {isFetchingNextPage ? "Loading..." : "Show more"}
        </Button>
      )}
    </>
  );
}
