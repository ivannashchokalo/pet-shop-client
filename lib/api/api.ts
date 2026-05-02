import axios from "axios";
import { refreshSession } from "./client/auth";

export const nextServer = axios.create({
  baseURL: "http://localhost:3001/api",
  withCredentials: true,
});

nextServer.interceptors.response.use(
  (response) => response,
  async (err) => {
    const originalReq = err.config; // містить інфо про запит, який впав

    if (err.response?.status === 401 && !originalReq._retry) {
      try {
        originalReq._retry = true; // ми створюємо, для того щоб уникнути infinite loop при наступній 401 (401 → refresh → 401 → refresh → )

        await refreshSession();

        //axios instance gjdthnf' повертає callable instance, який має методи .get(), .post()
        // і може викликатися як функція
        return nextServer(originalReq);
      } catch (error) {
        window.location.href = "/sign-in";
        return Promise.reject(error);
      }
    }
    return Promise.reject(err);
  },
);
