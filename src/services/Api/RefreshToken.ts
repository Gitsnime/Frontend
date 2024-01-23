import Api from "./Index";
import { Config } from "../Config/Index";
import { authStore } from "@/stores/Auth";

export const refreshToken = async (): Promise<string | null | void> => {
  const api = new Api();

  return await api.get("/auth/refresh", (status: number, data: any) => {
    if (status == 200 && data?.access_token) {
      authStore().setToken(data?.access_token);
      return data?.access_token;
    } else {
      Config.logout();
      return null;
    }
  });
};
