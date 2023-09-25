import { privateApi, publicApi } from "../../api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getErrorMessage } from "../../getErrorMessage";
import { token } from "../../api";
import {
  IRegisterUserPayload,
  ILoginUserPayload,
  ISignUpData,
  ISignInData,
  ICurrentUserPayload,
} from "../../types";

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
    await privateApi.post("/api/auth/logout");
    token.unset();
  } catch (error) {
    console.log(thunkAPI.rejectWithValue(getErrorMessage(error)));
    return thunkAPI.rejectWithValue(getErrorMessage(error));
  }
});

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
