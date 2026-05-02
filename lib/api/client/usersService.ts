import { AnimalId } from "@/types/animal";
import { User, UserName } from "@/types/user";
import { nextServer } from "../api";

export interface ChangePasswordPayload {
  oldPassword: string;
  newPassword: string;
}

interface ChangeNamePayload {
  name: UserName;
}

export const fetchFavorites = async () => {
  const { data } = await nextServer.get("users/favorites");
  return data.favorites;
};

export const addToFavorites = async (animalId: AnimalId) => {
  const { data } = await nextServer.patch("users/favorites", { animalId });
  return data;
};

export const removeFromFavorites = async (animalId: AnimalId) => {
  const { data } = await nextServer.delete("users/favorites", {
    data: { animalId },
  });
  return data;
};

export const fetchFavoriteAnimals = async () => {
  const { data } = await nextServer.get("users/favorites/animals");
  return data;
};

export const clearFavorites = async () => {
  const { data } = await nextServer.delete("/users/favorites/animals");
  return data;
};

export const changePassword = async (body: ChangePasswordPayload) => {
  const { data } = await nextServer.patch(
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
