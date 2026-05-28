import { Animal, AnimalId } from "@/types/animal";
import { nextServer } from "../api";

export interface FetchAnimalsRequest {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  animals: Animal[];
}

export const fetchAnimals = async (
  page: number,
  type: string,
  breed: string,
  sex: string,
  search: string,
) => {
  const { data } = await nextServer.get<FetchAnimalsRequest>("/animals", {
    params: {
      page,
      perPage: 12,
      type,
      breed,
      sex,
      search,
    },
  });

  console.log(data);
  return data;
};

export const fetchAnimalById = async (id: AnimalId) => {
  const { data } = await nextServer.get<Animal>(`/animals/${id}`);
  return data;
};

export const fetchFilters = async (type: string) => {
  const { data } = await nextServer.get("/animals/filters", {
    params: {
      type,
    },
  });
  return data;
};
