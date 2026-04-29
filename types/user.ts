export interface User {
  _id: string;
  name: string;
  email: string;
  role: "user" | "admin";
  favorites: string[];
  requests: string[];
  createdAt: string;
  updatedAt: string;
}

export type UserName = User["name"];
