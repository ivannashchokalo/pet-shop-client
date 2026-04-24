import { CreateRequest } from "@/types/request";
import { nextServer } from "./api";

export const createRequest = async (body: CreateRequest) => {
  const { data } = await nextServer.post("/requests", body);
  console.log("cl");
  return data;
};
