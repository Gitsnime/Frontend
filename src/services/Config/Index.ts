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
      url = "https://song-lyrics-api.azharimm.dev";
      const hostname = window.location.hostname;
      if (hostname === "localhost")
        url = "https://song-lyrics-api.azharimm.dev";
    } else {
      url = "https://song-lyrics-api.azharimm.dev";
      const hostname = window.location.hostname;
      if (hostname === "localhost")
        url = "https://song-lyrics-api.azharimm.dev";
    }
    return url;
  },
  getApiRoot(app = "") {
    const version = "/";
    return this.apiUrl(app) + version;
  },
  logout() {
    localStorage.clear();
    sessionStorage.clear();
    window.location.assign("/login");
    // window.location.assign("/#/");api
  },
};
