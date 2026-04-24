export interface User {
  _id: string;
  email: string;
  role: "user" | "admin";
  favorites: string[];
  createdAt: string;
  updatedAt: string;
}
