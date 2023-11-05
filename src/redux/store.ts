import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./auth/authSlice";
import { schemesReducer } from "./schemes/schemesSlice";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { AnyAction } from "@reduxjs/toolkit";
import { IAuthState } from "../types";

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["accessToken", "refreshToken"],
};

const customMiddleWare =
  () => (next: (action: AnyAction) => void) => (action: AnyAction) => {
    next(action);
  };

export const store = configureStore({
  reducer: {
    auth: persistReducer<IAuthState>(persistConfig, userReducer),
    schemes: schemesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(customMiddleWare),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
