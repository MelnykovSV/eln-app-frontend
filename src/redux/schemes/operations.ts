import { privateApi } from "../../api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getErrorMessage } from "../../getErrorMessage";
import dayjs from "dayjs";

// import {

// } from "../../types";

export const getSchemes = createAsyncThunk<any>(
  "schemes/getSchemes",
  async (_, thunkAPI) => {
    try {
      const response = await privateApi.get("/api/schemes");
      const result = response.data.data.map((item: any) => {
        item.createdAt = dayjs(item.createdAt).format("DD.MM.YYYY");
        item.updatedAt = dayjs(item.updatedAt).format("DD.MM.YYYY");
        return item;
      });

      return result;
    } catch (error) {
      console.log(thunkAPI.rejectWithValue(getErrorMessage(error)));
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  }
);

export {};
