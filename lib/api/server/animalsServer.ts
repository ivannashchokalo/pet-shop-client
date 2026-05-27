import { Animal, AnimalId } from "@/types/animal";
import { cookies } from "next/headers";
import { FetchAnimalsRequest } from "../client/animalsClient";
import { nextServer } from "../api";

export const serverFetchAnimals = async (
  page: number,
  type: string,
  breed: string,
  search: string,
) => {
  const cookieStore = await cookies();
  const { data } = await nextServer.get<FetchAnimalsRequest>("/animals", {
    params: {
      page,
      perPage: 12,
      type,
      breed,
      search,
    },
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  console.log(data);
  return data;
};

export const serverFetchAnimalById = async (id: AnimalId) => {
  const { data } = await nextServer.get<Animal>(`/animals/${id}`);
  return data;
};
