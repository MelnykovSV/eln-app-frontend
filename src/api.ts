import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

console.log(axios);
export const token = {
  set(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export { axios };
