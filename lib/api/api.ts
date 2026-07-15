import axios from "axios";
import { refreshSession } from "./client/auth";

export const nextServer = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API}/api`,
  withCredentials: true,
});

nextServer.interceptors.response.use(
  (response) => response,
  async (err) => {
    const originalReq = err.config;

    if (err.response?.status === 401 && !originalReq._retry) {
      try {
        originalReq._retry = true;

        await refreshSession();

        return nextServer(originalReq);
      } catch (error) {
        window.location.href = "/sign-in";
        return Promise.reject(error);
      }
    }
    return Promise.reject(err);
  },
);
