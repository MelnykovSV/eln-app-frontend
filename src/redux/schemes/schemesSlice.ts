import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { isError, isPending } from "../statusCheckers";

import {
  //   IAuthState,
  //   ILoginUserPayload,
  //   IRegisterUserPayload,
  //   ICurrentUserPayload,
  IState,
  ISchemesState,
//   ISchemePreview,
} from "../../types";
// import { signUp, signIn, logOut, getCurrentUser } from "./operations";
import { getSchemes } from "./operations";

const initialState: ISchemesState = {
  schemePreviews: [],
  //   currentScheme: {

  //   }
  //   accessToken: null,
  //   refreshToken: null,
  //   isLoggedIn: false,
  status: "idle",
  isLoading: false,
  error: null,
};

const schemesSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    // updateTokens(state, action: PayloadAction<any>) {
    //   state.accessToken = action.payload.accessToken;
    //   state.refreshToken = action.payload.refreshToken;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getSchemes.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.schemePreviews = action.payload;
        state.isLoading = false;
        state.status = "fulfilled";
        state.error = null;
      }
    );
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

export const schemesReducer = schemesSlice.reducer;
// export const { updateTokens } = schemesSlice.actions;

export const getSchemePreviews = (state: IState) =>
  state.schemes.schemePreviews;

export {};
