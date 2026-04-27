import { CreateRequest, Request } from "@/types/request";
import { nextServer } from "./api";

interface FetchUserRequestsRequest {
  request: Request[];
  isUserRegistered: boolean;
}

export const createRequest = async (body: CreateRequest) => {
  const { data } = await nextServer.post<FetchUserRequestsRequest>(
    "/requests",
    body,
  );
  return data;
};

export const fetchUserRequests = async () => {
  const { data } = await nextServer.get<Request[]>("/users/requests");
  console.log(data);
  return data;
};

export async function deleteUserRequest(reqId: string) {
  console.log(reqId);
  const { data } = await nextServer.delete(`/users/requests/${reqId}`);
  return data;
}
