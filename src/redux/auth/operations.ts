import axios from "axios";
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

import { IUserPayload, ISignUpData } from "../../types";

export const signUp = createAsyncThunk<IUserPayload, ISignUpData>(
  "auth/signUp",
  async ({ userName, email, password }: ISignUpData, thunkAPI) => {
    console.log(axios);
    try {
      const signUpResponse = await axios.post(
        "http://localhost:3000/api/auth/register",
        {
          userName,
          email,
          password,
        }
      );

      console.log(signUpResponse);
      return signUpResponse.data.data;
    } catch (error) {
      console.log(thunkAPI.rejectWithValue(getErrorMessage(error)));
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  }
);
