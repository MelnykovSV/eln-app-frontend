import axios from "axios";
import { useAppDispatch } from "./redux/hooks";
import { getCurrentUser } from "./redux/auth/operations";
import { refresh } from "./redux/auth/operations";
import { updateTokens } from "./redux/auth/authSlice";

const privateApi = axios;

privateApi.defaults.baseURL = "http://localhost:3000";

let store: any;

const instance = axios.create({
  baseURL: "http://localhost:3000",
});

export const injectStore = (_store: any) => {
  store = _store;
  console.log(store);
};

// const dispatch = useAppDispatch()
console.log(store);

export const token = {
  set(token: string) {
    privateApi.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    privateApi.defaults.headers.common.Authorization = "";
  },
};
instance.interceptors.request.use((config) => {
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
    const originalRequest = error.config;
    // && !originalRequest._retry

    if (error.response.status === 401) {
      // originalRequest._retry = true;
      try {
        error.config.headers.Authorization = `Bearer ${
          store.getState().auth.refreshToken
        }`;
        console.log(error.config.headers.Authorization);
        const response = await instance.post("/api/auth/refresh");
        console.log(response.data.data.accessToken);
        error.config.headers.Authorization = `Bearer ${response.data.data.accessToken}`;
        // console.log(error.config)
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

      // store.dispatch(getCurrentUser());
      console.log(error.response.status);
      return error;
    }

    // return privateApi(originalRequest);
    return error;
  }
);

export { privateApi };
