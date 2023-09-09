import { axios } from "../../api";
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
  IAuthState,
} from "../../types";

export const signUp = createAsyncThunk<IRegisterUserPayload, ISignUpData>(
  "auth/signUp",
  async ({ userName, email, password }: ISignUpData, thunkAPI) => {
    try {
      const signUpResponse = await axios.post("/api/auth/register", {
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
      const signInResponse = await axios.post("/api/auth/login", {
        email,
        password,
      });
      token.set(signInResponse.data.data.accessToken);
      console.log(axios.defaults);
      return signInResponse.data.data;
    } catch (error) {
      console.log(thunkAPI.rejectWithValue(getErrorMessage(error)));
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  }
);

export const logOut = createAsyncThunk(
  "/api/auth/logout",
  async (_, thunkAPI) => {
    // const state = thunkAPI.getState() as { auth: IAuthState };

    try {
      const response = await axios.post("/api/auth/logout");
      console.log(response);

      // await fetch("https://bookread-backend.goit.global/auth/logout", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization: `Bearer ${state.auth.accessToken}`,
      //   },
      // });

      token.unset();
    } catch (error) {
      console.log(thunkAPI.rejectWithValue(getErrorMessage(error)));
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  }
);
