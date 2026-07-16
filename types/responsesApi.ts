import { Animal } from "./animal";

export interface FavoriteAnimalsResponse {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  animals: Animal[];
}
