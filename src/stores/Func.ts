export default {
  getData(state: string, key: string, default_value: any, type = "session") {
    if (type == "session") {
      const data = sessionStorage.getItem(state);
      if (data) return JSON.parse(data)[key];
      else {
        sessionStorage.setItem(state, JSON.stringify(default_value));
        return default_value[key];
      }
    } else {
      const data = localStorage.getItem(state);
      if (data) return JSON.parse(data)[key];
      else {
        localStorage.setItem(state, JSON.stringify(default_value));
      }
    }
  },
  saveData(
    state: string,
    key: string,
    default_data: any,
    value: any,
    type = "session"
  ) {
    let data = default_data;
    let raw;
    if (type === "session") raw = sessionStorage.getItem(state);
    else raw = localStorage.getItem(state);

    if (raw) data = JSON.parse(raw);
    data[key] = value;

    if (type == "session") sessionStorage.setItem(state, JSON.stringify(data));
    else localStorage.setItem(state, JSON.stringify(data));

    if (data) return data[key];
    else return default_data[key];
  },
};
