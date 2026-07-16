import { api } from "@/app/api/api";
import { Statistic } from "@/types/statistic";

export const fetchStatistics = async () => {
  const { data } = await api.get<Statistic>("/statistics");
  return data;
};
