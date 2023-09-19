import { privateApi } from "../../api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getErrorMessage } from "../../getErrorMessage";
import dayjs from "dayjs";
import { IReactionPreviewData } from "../../types";
import { ISchemeData, IStage } from "../../types/redux";

export interface IgetSchemeAndStageParams {
  schemeId: string;
  stageId: string;
}
export interface IgetSchemeAndStagePayload {
  schemeData: ISchemeData;
  stageData: IStage;
}

export const getSchemes = createAsyncThunk<IReactionPreviewData[]>(
  "schemes/getSchemes",
  async (_, thunkAPI) => {
    try {
      const response = await privateApi.get("/api/schemes");
      const result = response.data.data.map((item: IReactionPreviewData) => {
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

export const getSingleScheme = createAsyncThunk<ISchemeData, string>(
  "schemes/getSingleScheme",
  async (schemeId: string, thunkAPI) => {
    try {
      const response = await privateApi.get(`/api/schemes/${schemeId}`);
      console.log(response);

      const result = {
        ...response.data.data,
        createdAt: dayjs(response.data.data.createdAt).format("DD.MM.YYYY"),
        updatedAt: dayjs(response.data.data.updatedAt).format("DD.MM.YYYY"),
      };
      console.log(result);

      return result;
    } catch (error) {
      console.log(thunkAPI.rejectWithValue(getErrorMessage(error)));
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  }
);

export const getSchemeAndStage = createAsyncThunk<
  IgetSchemeAndStagePayload,
  IgetSchemeAndStageParams
>("schemes/getSchemeAndStage", async ({ schemeId, stageId }, thunkAPI) => {
  try {
    const response = await privateApi.get(`/api/schemes/${schemeId}`);
    console.log(response);

    const schemeData = {
      ...response.data.data,
      createdAt: dayjs(response.data.data.createdAt).format("DD.MM.YYYY"),
      updatedAt: dayjs(response.data.data.updatedAt).format("DD.MM.YYYY"),
    };

    const stageData = schemeData.stages.find(
      (item: IStage) => item._id === stageId
    );

    console.log(schemeData, stageData);

    return { schemeData, stageData };
  } catch (error) {
    console.log(thunkAPI.rejectWithValue(getErrorMessage(error)));
    return thunkAPI.rejectWithValue(getErrorMessage(error));
  }
});
