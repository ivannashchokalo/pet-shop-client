import { FavoriteAnimalsResponse } from "@/types/responsesApi";
import { nextServer } from "../api";
import { cookies } from "next/headers";

export const fetchFavoriteAnimalsServer = async ({
  pageParam = 1,
}: {
  pageParam?: number;
}) => {
  const cookieStore = await cookies();

  const { data } = await nextServer.get<FavoriteAnimalsResponse>(
    "users/favorites/animals",
    {
      params: {
        page: pageParam,
        perPage: 9,
      },
      headers: {
        Cookie: cookieStore.toString(),
      },
    },
  );
  return data;
};
