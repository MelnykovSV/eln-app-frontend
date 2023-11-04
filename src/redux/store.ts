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

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["accessToken", "refreshToken"],
};

const customMiddleWare = (store: any) => (next: any) => (action: any) => {
  next(action);
};

export const store = configureStore({
  reducer: {
    auth: persistReducer<any>(persistConfig, userReducer),
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
