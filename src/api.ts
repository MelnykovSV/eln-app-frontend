import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";
export const token = {
  set(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};
