import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from './auth/authSlice';
// import { planningReducer } from './planning/planningSlice';
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

export const store = configureStore({
  reducer: {
    auth: persistReducer<any>(persistConfig, userReducer),
    // planning: planningReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
