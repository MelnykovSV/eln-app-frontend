import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { isAuthError, isAuthPending } from "../statusCheckers";
import { ITokensPayload } from "../../types";

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
  error: { message: null, code: null },
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    updateTokens(state, action: PayloadAction<ITokensPayload>) {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    forceLogOut(state) {
      state.accessToken = null;
      state.refreshToken = null;
      state.isLoggedIn = false;
      state.isLoading = false;
      state.status = "fulfilled";
      state.error = { message: null, code: null };
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
        state.error = { message: null, code: null };
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
        state.error = { message: null, code: null };
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
      state.error = { message: null, code: null };
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
        state.error = { message: null, code: null };
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
      state.accessToken = null;
      state.refreshToken = null;
    });
    builder.addMatcher(isAuthPending, (state) => {
      state.isLoading = true;
      state.status = "pending";
    });
    builder.addMatcher(isAuthError, (state, action) => {
      state.isLoading = false;
      state.status = "rejected";
      state.error = action.payload;
    });
  },
});

export const userReducer = authSlice.reducer;
export const { updateTokens, forceLogOut } = authSlice.actions;

export const getAccessToken = (state: IState) => state.auth.accessToken;
export const getIsLoggedIn = (state: IState) => state.auth.isLoggedIn;
export const getIsRefreshing = (state: IState) => state.auth.isRefreshing;
export const getIsLoading = (state: IState) => state.auth.isLoading;

export const getAuthError = (state: IState) => state.auth.error;
export const getUserName = (state:IState)=>state.auth.user.userName
