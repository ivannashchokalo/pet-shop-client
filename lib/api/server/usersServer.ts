import { FavoriteAnimalsResponse } from "@/types/responsesApi";
import { nextServer } from "../api";

export const fetchFavoriteAnimalsServer = async ({
  pageParam = 1,
}: {
  pageParam?: number;
}) => {
  const { data } = await nextServer.get<FavoriteAnimalsResponse>(
    "users/favorites/animals",
    {
      params: {
        page: pageParam,
        perPage: 9,
      },
    },
  );
  return data;
};
