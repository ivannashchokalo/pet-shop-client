import { cookies } from "next/headers";
import { nextServer } from "./api";

export const fetchUserRequestsServer = async () => {
  const cookieStore = await cookies();
  const { data } = await nextServer.get<Request[]>("/users/requests", {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  console.log(data);
  return data;
};
