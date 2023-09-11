import { privateApi, publicApi } from "../../api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getErrorMessage } from "../../getErrorMessage";

// import {
//   ISignUpData,
//   ISignInData,
//   IUserPayload,
//   IAuthState,
//   IBookFormData,
// } from '../../interfaces';
import { token } from "../../api";
// import {
//   IUpdateBookResponseDataWithId,
//   IUpdateBookData,
// } from '../../interfaces';

import {
  IRegisterUserPayload,
  ILoginUserPayload,
  ISignUpData,
  ISignInData,
  ICurrentUserPayload,
} from "../../types";

// import { store } from "../store";

export const signUp = createAsyncThunk<IRegisterUserPayload, ISignUpData>(
  "auth/signUp",
  async ({ userName, email, password }: ISignUpData, thunkAPI) => {
    try {
      const signUpResponse = await publicApi.post("/api/auth/register", {
        userName,
        email,
        password,
      });
      return signUpResponse.data.data;
    } catch (error) {
      console.log(thunkAPI.rejectWithValue(getErrorMessage(error)));
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  }
);

export const signIn = createAsyncThunk<ILoginUserPayload, ISignInData>(
  "auth/signIn",
  async ({ email, password }: ISignInData, thunkAPI) => {
    try {
      const signInResponse = await publicApi.post("/api/auth/login", {
        email,
        password,
      });
      return signInResponse.data.data;
    } catch (error) {
      console.log(thunkAPI.rejectWithValue(getErrorMessage(error)));
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    const response = await privateApi.post("/api/auth/logout");
    console.log(response);
    token.unset();
  } catch (error) {
    console.log(thunkAPI.rejectWithValue(getErrorMessage(error)));
    return thunkAPI.rejectWithValue(getErrorMessage(error));
  }
});

// export const refresh = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
//   const state = thunkAPI.getState() as { auth: IAuthState };
//   console.log(state.auth.accessToken);
//   console.log(privateApi.defaults);
//   if (state.auth.refreshToken) {
//     token.set(state.auth.refreshToken);
//   }

//   try {
//     const response = await privateApi.post("/api/auth/refresh");
//     console.log(response.data.data);
//     token.set(response.data.data.accessToken);
//     return response.data.data;
//   } catch (error) {
//     console.log(thunkAPI.rejectWithValue(getErrorMessage(error)));
//     return thunkAPI.rejectWithValue(getErrorMessage(error));
//   }
// });

export const getCurrentUser = createAsyncThunk<ICurrentUserPayload>(
  "auth/current",
  async (_, thunkAPI) => {
    try {
      const response = await privateApi.get("/api/auth/current");
      return {
        ...response.data.data,
      };
    } catch (error) {
      if (getErrorMessage(error) !== "Request failed with status code 404") {
        console.log(thunkAPI.rejectWithValue(getErrorMessage(error)));
        return thunkAPI.rejectWithValue(getErrorMessage(error));
      }
    }
  }
);
