import { CreateRequest, Request } from "@/types/request";
import { nextServer } from "../api";

interface CreateUserRedponse {
  request: Request[];
  isUserRegistered: boolean;
}

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
