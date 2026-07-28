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
      perPage: 9,
      type,
      ...(breed && { breed }),
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
  return data;
};

export const serverFetchAnimalById = async (id: AnimalId) => {
  const { data } = await nextServer.get<Animal>(`/animals/${id}`);
  return data;
};

export const serverFetchFilters = async (type: string) => {
  const { data } = await nextServer.get("/animals/filters", {
    params: {
      type,
    },
  });
  return data;
};
