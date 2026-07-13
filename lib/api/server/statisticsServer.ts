import { Statistic } from "@/types/statistic";
import { nextServer } from "../api";

export const fetchStatistics = async () => {
  const { data } = await nextServer.get<Statistic>("/statistics");
  return data;
};
