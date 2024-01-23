import axios from "axios";
import { Config } from "../Config/Index";
import { refreshToken } from "./RefreshToken";

const myAxios = axios.create({
  withCredentials: true,
});

myAxios.interceptors.response.use(
  (res) => res,
  async (err) => {
    const { response } = err;

    if (response.status == 401) {
      if (err.config.url == "/auth/refresh") {
        Config.logout();
      } else if (!err.config.sent) {
        err.config.sent = true;

        const new_token = await refreshToken();

        if (new_token != null) {
          err.config.headers = {
            ...err.config.headers,
            Authorization: `Bearer ${new_token}`,
          };
        }

        return axios(err.config);
      }
    }

    throw err;
  }
);

export default myAxios;
