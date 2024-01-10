import { defineStore } from "pinia";
import func from "./Func";

export const authStore = defineStore({
  id: "auth",
  state: () => ({
    token: "",
    token_expire: "",
    user: {
      username: "",
      profile: "",
    },
  }),
  actions: {
    getToken() {
      this.token = func.getData(this.$id, "token", this.$state, "local");
      return this.token;
    },
    getUser() {
      this.user = func.getData(this.$id, "user", this.$state, "local");
      return this.user;
    },
    setToken(token = "") {
      func.saveData(this.$id, "token", this.$state, token, "local");
      this.token = token;
    },
    setUser(data: any) {
      func.saveData(this.$id, "user", this.$state, data, "local");
      this.user = data;
    },
    getData(index: string) {
      return func.getData(this.$id, index, this.$state, "local");
    },
    setData(index: string, data: any) {
      func.saveData(this.$id, index, this.$state, data, "local");
    },
    clearData() {
      const data = {
        token: "",
        token_expire: "",
        user: {
          username: "",
          profile: "",
        },
      };
      this.$state = data;
      localStorage.setItem(this.$id, JSON.stringify(data));
    },
  },
});
