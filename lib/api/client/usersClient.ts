import { AnimalId } from "@/types/animal";
import { User, UserName } from "@/types/user";
import { nextServer } from "../api";
import { FavoriteAnimalsResponse } from "@/types/responsesApi";

export interface ChangePasswordPayload {
  oldPassword: string;
  newPassword: string;
}

interface ChangeNamePayload {
  name: UserName;
}

type FetchFavoriteAnimalsParams = {
  pageParam?: number;
};

interface FavoritesResponse {
  favorites: AnimalId[];
}

interface UpdateFavoritesResponse {
  message: string;
  favorites: AnimalId[];
}

interface ChangePasswordResponse {
  message: string;
}

export const fetchFavorites = async () => {
  const { data } = await nextServer.get<FavoritesResponse>("users/favorites");
  return data.favorites;
};

export const addToFavorites = async (animalId: AnimalId) => {
  const { data } = await nextServer.patch<UpdateFavoritesResponse>(
    "users/favorites",
    { animalId },
  );
  return data;
};

export const removeFromFavorites = async (animalId: AnimalId) => {
  const { data } = await nextServer.delete<UpdateFavoritesResponse>(
    "users/favorites",
    {
      data: { animalId },
    },
  );
  return data;
};

export const fetchFavoriteAnimals = async ({
  pageParam = 1,
}: FetchFavoriteAnimalsParams) => {
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

export const clearFavorites = async () => {
  const { data } = await nextServer.delete<UpdateFavoritesResponse>(
    "/users/favorites/animals",
  );
  return data;
};

export const changePassword = async (body: ChangePasswordPayload) => {
  const { data } = await nextServer.patch<ChangePasswordResponse>(
    "/profile/settings/change-password",
    body,
  );
  return data;
};

export const changeName = async (body: ChangeNamePayload) => {
  const { data } = await nextServer.patch<User>(
    "/profile/settings/change-name",
    body,
  );
  return data;
};
