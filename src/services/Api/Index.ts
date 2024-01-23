/* eslint-disable */
import axios from "axios";
import { Config } from "../Config/Index";
import { authStore } from "@/stores/Auth";
import myAxios from "./AxiosInstance";

export default class Api {
  apiService: any = {};
  token = "";
  app = Config.app();
  multipart_formdata = false;

  constructor() {
    this.apiService = myAxios;
    this.token = authStore().getToken();
  }

  setFormMultipart() {
    this.apiService.defaults.headers["Content-Type"] = "multipart/form-data";
  }

  /* @GET METHOD  */
  get(path: string, callback: any, app = this.app, resType = "json") {
    return this.validateReq("GET", app, path, null, callback, false, resType);
  }
  /* @POST METHOD  */
  post(
    path: string,
    request: any,
    callback: any,
    app = this.app,
    isMultipart = false
  ) {
    return this.validateReq(
      "POST",
      app,
      path,
      request,
      callback,
      isMultipart,
      "json"
    );
  }
  /* @PUT METHOD  */
  put(
    path: string,
    request: any,
    callback: any,
    app = this.app,
    isMultipart = false
  ) {
    return this.validateReq(
      "PUT",
      app,
      path,
      request,
      callback,
      isMultipart,
      "json"
    );
  }
  /* @PATCH METHOD  */
  patch(path: string, request: any, callback: any, app = this.app) {
    return this.validateReq(
      "PATCH",
      app,
      path,
      request,
      callback,
      false,
      "json"
    );
  }
  /* @DELETE METHOD  */
  delete(path: string, request: any, callback: any, app = this.app) {
    return this.validateReq(
      "DELETE",
      app,
      path,
      request,
      callback,
      false,
      "json"
    );
  }

  async validateReq(
    type: string,
    app: string,
    path: string,
    request: any,
    callback: any,
    isMultipart = false,
    resType = "json"
  ) {
    this.apiService.defaults.headers["Access-Control-Allow-Origin"] = "*";
    // Content Type
    if (isMultipart) this.setFormMultipart();
    else if (this.multipart_formdata) this.setFormMultipart();
    else if (path == "token")
      this.apiService.defaults.headers["Content-Type"] =
        "application/x-www-form-urlencoded";
    else this.apiService.defaults.headers["Content-Type"] = "application/json";

    // DEFAULT CONFIG
    let apiroot = "";
    if (app) apiroot = Config.getApiRoot(app);
    else apiroot = Config.getApiRoot(this.app);

    const config = {
      method: type,
      url: apiroot + path,
      resType: resType,
    };

    // BEARER TOKEN
    if (path !== "token") {
      this.token = authStore().getToken();
      Object.assign(config, {
        headers: { Authorization: `Bearer ${this.token}` },
      });
    }

    // STORE OR UPDATE | Attach request for data
    if (type !== "GET") Object.assign(config, { data: request });

    try {
      const response = await this.apiService.request(config);
      // console.log('resapi', response)
      const res = {
        status: response?.status,
        data: null,
        message:
          response?.message ?? response?.data?.message ?? response.statusText,
        response: response,
      };

      if (this.validateResponseData(res)) {
        // validate data to get notif if have error
        // UPDATE TOKEN
        if (response.data.jwt_token)
          authStore().setToken(response.data.jwt_token);
        if (response.data.jwt_token_expire)
          authStore().setData("token_expire", response.data.jwt_token_expire);
        res.data = response.data;
      }
      callback(res.status, res.data, res.message, response);
    } catch (error: any) {
      console.log("api_res_error", error.response);
      const res = {
        status: error?.response?.status ?? 599,
        data: error?.response?.data,
        message: error?.response?.data?.message ?? error?.response?.message,
        response: error?.response ?? { data: null },
      };
      this.validateResponseData(res);
      callback(res.status, res.data, res.message, res.data, res.response);
    }
  }

  validateResponseData(res: any) {
    if (res === null) {
      return null;
    } else if (res.status === 200) {
      return true;
    } else if (res.status === 400) {
      // ERROR HANDLING
      console.log("error");
      return null;
    } else if (res.status === 401) {
      Config.logout();
      // ERROR HANDLING
      console.log("error");
      return null;
    } else if (res.status === 404) {
      // ERROR HANDLING
      console.log("error");
      return null;
    } else if (res.status === 403) {
      // ERROR HANDLING
      console.log("error");
      return null;
    } else if (res.status > 404 && res.status < 500) {
      // ERROR HANDLING
      console.log("error");
      return null;
    } else if (res.status >= 500) {
      if (res.status === 599) console.log(res);
      // ERROR HANDLING
      else console.log("error");
      return null;
    } else return res.data;
  }
}
