import { CreateRequest, Request } from "@/types/request";
import { nextServer } from "../api";

interface CreateUserRedponse {
  request: Request[];
  isUserRegistered: boolean;
}

// interface AnimalInRequest {
//   _id: string;
//   name: string;
//   type: string;
//   breed: string;
//   sex: string;
//   birthDate: string;
//   price: number;
//   status: string;
//   description: string;
//   images: string[];
//   updatedAt: string;
// }

// interface UserRequest {
//   _id: string;
//   animalId: AnimalInRequest;
//   customerName: string;
//   email: string;
//   phone: string;
//   message: string;
//   contactMethod: "phone" | "email";
//   status: string;
//   createdAt: string;
//   updatedAt: string;
// }

export const createRequest = async (body: CreateRequest) => {
  const { data } = await nextServer.post<CreateUserRedponse>("/requests", body);
  return data;
};

export const fetchUserRequests = async () => {
  const { data } = await nextServer.get<Request[]>("/users/requests");
  return data;
};

export async function deleteUserRequest(reqId: string) {
  const { data } = await nextServer.delete(`/users/requests/${reqId}`);
  return data;
}
