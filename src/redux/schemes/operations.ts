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

export interface IaddFileParams {
  spectr: File;
  label: string;
  attemptNumber: number;
  schemeId: string;
  stageId: string;
}

export interface IDeleteFileParams {
  spectrId: string;
  attemptNumber: number;
  spectrUrl: string;

  stageId: string;
}

export interface IAddFilePayload {
  schemeId: string;
  stageId: string;
  attemptNumber: number;
  spectra: { label: string; spectrUrl: string; _id: string }[];
}

export interface IDeleteFilePayload {
  stageId: string;
  attemptNumber: number;
  spectra: { label: string; spectrUrl: string; _id: string }[];
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

      const result = {
        ...response.data.data,
        createdAt: dayjs(response.data.data.createdAt).format("DD.MM.YYYY"),
        updatedAt: dayjs(response.data.data.updatedAt).format("DD.MM.YYYY"),
      };

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

    const schemeData = {
      ...response.data.data,
      createdAt: dayjs(response.data.data.createdAt).format("DD.MM.YYYY"),
      updatedAt: dayjs(response.data.data.updatedAt).format("DD.MM.YYYY"),
    };

    const stageData = schemeData.stages.find(
      (item: IStage) => item._id === stageId
    );

    return { schemeData, stageData };
  } catch (error) {
    console.log(thunkAPI.rejectWithValue(getErrorMessage(error)));
    return thunkAPI.rejectWithValue(getErrorMessage(error));
  }
});

export const addSpectr = createAsyncThunk<IAddFilePayload, IaddFileParams>(
  "schemes/addSpectr",
  async ({ spectr, label, attemptNumber, schemeId, stageId }, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append("spectr", spectr);
      formData.append("label", label);
      formData.append("attemptNumber", attemptNumber.toString());
      formData.append("schemeId", schemeId);
      formData.append("stageId", stageId);
      const response = await privateApi.patch("/api/schemes/spectr", formData);
      return {
        schemeId,
        stageId,
        attemptNumber,
        spectra: response.data.data,
      };
    } catch (error) {
      console.log(thunkAPI.rejectWithValue(getErrorMessage(error)));
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  }
);

export const deleteSpectr = createAsyncThunk<
  IDeleteFilePayload,
  IDeleteFileParams
>(
  "schemes/deleteSpectr",
  async ({ attemptNumber, stageId, spectrId, spectrUrl }, thunkAPI) => {
    try {
      const publicId = spectrUrl.split("/").pop()?.split(".")[0] as string;
      const response = await privateApi.delete(
        `/api/schemes/spectr/${stageId}/${attemptNumber}/${spectrId}/${publicId}`
      );
      return {
        stageId,
        attemptNumber,
        spectra: response.data.data,
      };
    } catch (error) {
      console.log(thunkAPI.rejectWithValue(getErrorMessage(error)));
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  }
);

export const saveCurrentStageData = createAsyncThunk<void, IStage>(
  "schemes/saveCurrentStageData",
  async (currentStage, thunkAPI) => {
    try {
      await privateApi.patch(
        `/api/schemes/updateStage/${currentStage._id}`,
        currentStage
      );
    } catch (error) {
      console.log(thunkAPI.rejectWithValue(getErrorMessage(error)));
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  }
);

export const updateSchemeStatusAndSave = createAsyncThunk<
  string,
  { schemeId: string | null; status: string }
>(
  "schemes/updateSchemeStatusAndSave",
  async ({ schemeId, status }, thunkAPI) => {
    try {
      await privateApi.patch(`/api/schemes/${schemeId}`, {
        status,
      });
      return status;
    } catch (error) {
      console.log(thunkAPI.rejectWithValue(getErrorMessage(error)));
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  }
);
