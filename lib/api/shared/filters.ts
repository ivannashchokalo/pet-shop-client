import { nextServer } from "../api";

export const fetchFilters = async (type: string) => {
  const { data } = await nextServer.get("/animals/filters", {
    params: {
      type,
    },
  });
  return data;
};
