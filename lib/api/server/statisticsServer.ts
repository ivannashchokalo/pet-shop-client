// import { Statistic } from "@/types/statistic";
// import { nextServer } from "../api";

// export const fetchStatistics = async () => {
//   const { data } = await nextServer.get<Statistic>("/statistics");
//   return data;
// };

// lib/api/server/statisticsServer.ts

import { api } from "@/app/api/api";
import { Statistic } from "@/types/statistic";

export const fetchStatistics = async () => {
  const { data } = await api.get<Statistic>("/statistics");
  return data;
};
