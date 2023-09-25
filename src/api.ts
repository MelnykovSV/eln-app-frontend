import axios from "axios";
import { updateTokens } from "./redux/auth/authSlice";
import { logOut } from "./redux/auth/operations";

let store: any;

const privateApi = axios.create({
  baseURL: "http://localhost:3000",
});
const publicApi = axios.create({
  baseURL: "http://localhost:3000",
});
const refreshApi = axios.create({
  baseURL: "http://localhost:3000",
});

export const injectStore = (_store: any) => {
  store = _store;
};

export const token = {
  set(token: string) {
    privateApi.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    privateApi.defaults.headers.common.Authorization = "";
  },
};

refreshApi.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${store.getState().auth.refreshToken}`;
  return config;
});

privateApi.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${store.getState().auth.accessToken}`;
  return config;
});

privateApi.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    if (error.response.status === 401) {
      try {
        error.config.headers.Authorization = `Bearer ${
          store.getState().auth.refreshToken
        }`;
        const response = await refreshApi.get("/api/auth/refresh");
        error.config.headers.Authorization = `Bearer ${response.data.data.accessToken}`;
        store.dispatch(
          updateTokens({
            accessToken: response.data.data.accessToken,
            refreshToken: response.data.data.refreshToken,
          })
        );
        return privateApi.request(error.config);
      } catch (e) {
        console.log(e);
      }
      return error;
    }
    return error;
  }
);

refreshApi.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    if (error.response.status === 401) {
      try {
        store.dispatch(logOut());
      } catch (e) {
        console.log(e);
      }
    }
    return error;
  }
);

export { privateApi, publicApi, refreshApi };
