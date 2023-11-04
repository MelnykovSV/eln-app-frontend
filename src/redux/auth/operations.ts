import { privateApi, publicApi, refreshApi } from "../../api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getErrorMessage } from "../../getErrorMessage";
import request from "axios";
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
      if (request.isAxiosError(error) && error.response) {
        return thunkAPI.rejectWithValue({
          message: error.response.data.message,
          code: error.response.data.code || null,
        });
      }
      return thunkAPI.rejectWithValue({
        message: getErrorMessage(error),
        code: null,
      });
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
      if (request.isAxiosError(error) && error.response) {
        return thunkAPI.rejectWithValue({
          message: error.response.data.message,
          code: error.response.data.code || null,
        });
      }
      return thunkAPI.rejectWithValue({
        message: getErrorMessage(error),
        code: null,
      });
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await privateApi.post("/api/auth/logout");
  } catch (error) {
    if (request.isAxiosError(error) && error.response) {
      return thunkAPI.rejectWithValue({
        message: error.response.data.message,
        code: error.response.data.code || null,
      });
    }
    return thunkAPI.rejectWithValue({
      message: getErrorMessage(error),
      code: null,
    });
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
      /// TODO: Разобраться, почему тут такая проверка, скорее всего нужно что-то изменить
      if (getErrorMessage(error) !== "Request failed with status code 404") {
        if (request.isAxiosError(error) && error.response) {
          return thunkAPI.rejectWithValue({
            message: error.response.data.message,
            code: error.response.data.code || null,
          });
        }
        return thunkAPI.rejectWithValue({
          message: getErrorMessage(error),
          code: null,
        });
      }
    }
  }
);

export const refresh = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
  try {
    const response = await refreshApi.post("/api/auth/refresh");
    return response.data.data;
  } catch (error) {
    if (request.isAxiosError(error) && error.response) {
      return thunkAPI.rejectWithValue({
        message: error.response.data.message,
        code: error.response.data.code || null,
      });
    }
    return thunkAPI.rejectWithValue({
      message: getErrorMessage(error),
      code: null,
    });
  }
});
