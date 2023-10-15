import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { isError, isPending } from "../statusCheckers";

import {
  IAuthState,
  ILoginUserPayload,
  IRegisterUserPayload,
  ICurrentUserPayload,
  IState,
} from "../../types";
import { signUp, signIn, logOut, getCurrentUser, refresh } from "./operations";

const initialState: IAuthState = {
  user: {
    userName: null,
    email: null,
    avatarURL: null,
  },
  accessToken: null,
  refreshToken: null,
  isLoggedIn: false,
  isRefreshing: false,
  status: "idle",
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    updateTokens(state, action: PayloadAction<any>) {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    forceLogOut(state) {
      state.accessToken = null;
      state.refreshToken = null;
      state.isLoggedIn = false;
      state.isLoading = false;
      state.status = "fulfilled";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      signUp.fulfilled,
      (state, action: PayloadAction<IRegisterUserPayload>) => {
        state.user = action.payload.user;
        state.isLoggedIn = false;
        state.isLoading = false;
        state.status = "fulfilled";
        state.error = null;
      }
    );
    builder.addCase(
      signIn.fulfilled,
      (state, action: PayloadAction<ILoginUserPayload>) => {
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.status = "fulfilled";
        state.error = null;
      }
    );
    builder.addCase(logOut.fulfilled, (state) => {
      state.user = {
        userName: null,
        email: null,
        avatarURL: null,
      };
      state.accessToken = null;
      state.refreshToken = null;
      state.isLoggedIn = false;
      state.isLoading = false;
      state.status = "fulfilled";
      state.error = null;
    });

    builder.addCase(
      getCurrentUser.fulfilled,
      (state, action: PayloadAction<ICurrentUserPayload>) => {
        state.user = {
          userName: action.payload.userName,
          email: action.payload.email,
          avatarURL: action.payload.avatarURL,
        };
        state.isLoggedIn = true;
        state.isLoading = false;
        state.status = "fulfilled";
        state.error = null;
        return;
      }
    );
    builder.addCase(refresh.fulfilled, (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.isLoading = false;
      state.isRefreshing = false;
      state.isLoggedIn = true;
      state.status = "fulfilled";
    });
    builder.addCase(refresh.pending, (state) => {
      state.isRefreshing = true;
    });
    builder.addCase(refresh.rejected, (state) => {
      state.isRefreshing = false;
      state.isLoggedIn = false;
    });
    builder.addMatcher(isPending, (state) => {
      state.isLoading = true;
      state.status = "pending";
    });
    builder.addMatcher(isError, (state, action) => {
      state.isLoading = false;
      state.status = "rejected";
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export const userReducer = authSlice.reducer;
export const { updateTokens, forceLogOut } = authSlice.actions;

export const getAccessToken = (state: IState) => state.auth.accessToken;
export const getIsLoggedIn = (state: IState) => state.auth.isLoggedIn;
export const getIsRefreshing = (state: IState) => state.auth.isRefreshing;
