import Versioning from "./Versioning";
import { authStore } from "@/stores/Auth";

export const Config = {
  ...Versioning,
  appName() {
    return "Gitsnime";
  },
  app() {
    return "gitsnime";
  },
  version() {
    return "1.0";
  },
  copyright() {
    return "© 2024";
  },
  apiUrl(app = "") {
    let url = "";
    if (app == "gitsnime") {
      url = "--endpoint--";
      const hostname = window.location.hostname;
      if (hostname === "localhost") url = "--endpoint--";
    } else {
      url = "--endpoint--";
      const hostname = window.location.hostname;
      if (hostname === "localhost") url = "--endpoint--";
    }
    return url;
  },
  getApiRoot(app = "") {
    const version = "v1/";
    return this.apiUrl(app) + version;
  },
  logout() {
    localStorage.clear();
    sessionStorage.clear();
    // window.location.assign('/login')
    window.location.assign("/#/");
  },
};
