import { Animal, AnimalId } from "@/types/animal";
import { cookies } from "next/headers";
import { FetchAnimalsRequest } from "../client/animalsClient";
import { nextServer } from "../api";

export const serverFetchAnimals = async (page = 1, type = "", search = "") => {
  const cookieStore = await cookies();
  const { data } = await nextServer.get<FetchAnimalsRequest>("/animals", {
    params: {
      page,
      perPage: 12,
      type,
      search,
    },
    headers: {
      Cookie: cookieStore.toString(),
    },
  });

  return data;
};

export const serverFetchAnimalById = async (id: AnimalId) => {
  const { data } = await nextServer.get<Animal>(`/animals/${id}`);
  return data;
};
