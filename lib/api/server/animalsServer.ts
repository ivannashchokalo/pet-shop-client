import { Animal, AnimalId } from "@/types/animal";
import { cookies } from "next/headers";
import { FetchAnimalsRequest } from "../client/animalsClient";
import { nextServer } from "../api";

export const serverFetchAnimals = async (
  page: number,
  type: string,
  breed: string,
  sex: string,
  sortBy: string,
  sortOrder: string,
  search: string,
  minPrice: string,
  maxPrice: string,
) => {
  const cookieStore = await cookies();
  const { data } = await nextServer.get<FetchAnimalsRequest>("/animals", {
    params: {
      page,
      perPage: 12,
      type,
      ...(breed && { breed }), // щоб у запит не потрапляли пусті значення
      ...(sex && { sex }),
      ...(search && { search }),
      ...(sortBy && { sortBy }),
      ...(sortOrder && { sortOrder }),
      ...(minPrice && { minPrice }),
      ...(maxPrice && { maxPrice }),
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
