import axios from "axios";
import { updateTokens, forceLogOut } from "./redux/auth/authSlice";

// const homePage = "https://eln-app-web-server.onrender.com";
const homePage = "http://localhost:3000";

let store: any;

const privateApi = axios.create({
  baseURL: homePage,
});
const publicApi = axios.create({
  baseURL: homePage,
});
const refreshApi = axios.create({
  baseURL: homePage,
});

export const injectStore = (_store: any) => {
  store = _store;
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
        const response = await refreshApi.post("/api/auth/refresh");
        error.config.headers.Authorization = `Bearer ${response.data.data.accessToken}`;
        store.dispatch(
          updateTokens({
            accessToken: response.data.data.accessToken,
            refreshToken: response.data.data.refreshToken,
          })
        );
        return privateApi.request(error.config);
      } catch (e) {
        store.dispatch(forceLogOut());
      }
      return error;
    }
    return error;
  }
);

export { privateApi, publicApi, refreshApi };
