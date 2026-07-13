import { Animal } from "./animal";

export interface Request {
  _id: string;
  animalId: Animal;
  customerName: string;
  email: string;
  phone: string;
  message: string;
  status: "new" | "contacted" | "closed";
  contactMethod: "phone" | "email";
  createdAt: string;
  updatedAt: string;
}

export interface CreateRequest {
  animalId: string;
  customerName: string;
  email: string;
  phone: string;
  message: string;
  contactMethod: "phone" | "email";
}

export type RequestId = Request["_id"];
