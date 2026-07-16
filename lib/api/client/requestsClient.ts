import { CreateRequest, Request } from "@/types/request";
import { nextServer } from "../api";

interface CreateRequestResponse {
  request: Request[];
  isUserRegistered: boolean;
}

interface DeleteUserRequestResponse {
  message: string;
}

export const createRequest = async (body: CreateRequest) => {
  const { data } = await nextServer.post<CreateRequestResponse>(
    "/requests",
    body,
  );
  return data;
};

export const fetchUserRequests = async () => {
  const { data } = await nextServer.get<Request[]>("/users/requests");
  return data;
};

export async function deleteUserRequest(reqId: string) {
  const { data } = await nextServer.delete<DeleteUserRequestResponse>(`/users/requests/${reqId}`);
  return data;
}
