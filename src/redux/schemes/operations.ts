import { privateApi } from "../../api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getErrorMessage } from "../../getErrorMessage";
import dayjs from "dayjs";
import { IReactionPreviewData } from "../../types";
import { ISchemeData, IStage } from "../../types/redux";
import request from "axios";
import { generateQueryString } from "../../helpers/generateQueryString";

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

export interface IGetSchemesParams {
  page: number;
  limit: number;
  schemeStatus: string | null;
  substring: string | null;
  sortingParam: string | null;
  sortingDirection: string | null;
}

export interface IGetSchemesPayload {
  schemePreviews: IReactionPreviewData[];
  currentPage: number;
  totalPages: number;
}

export interface IAddNewSchemeParams {
  startingMaterial: string;
  targetCompound: string;
  mass: string;
  price: string;
  deadline: dayjs.Dayjs;
  stages: {
    methodic: string;
    product: string;
    solvent: string;
    startingMaterial: string;
    temp: number | null;
    time: number | null;
    _yield: number | null;
  }[];
}

export interface IAddNewSchemePayload {
  _id: string;
}

export const getSchemes = createAsyncThunk<
  IGetSchemesPayload,
  IGetSchemesParams
>(
  "schemes/getSchemes",
  async (
    { page, limit, schemeStatus, substring, sortingParam, sortingDirection },
    thunkAPI
  ) => {
    const queryString = generateQueryString({
      currentPage: page,
      currentLimit: limit,
      currentSchemeStatus: schemeStatus,
      currentSubstring: substring,
      currentSortingParam: sortingParam,
      currentSortingDirection: sortingDirection,
    });

    try {
      const response = await privateApi.get(
        `/api/schemes${queryString ? `?${queryString}` : ""}`
      );
      const schemePreviews = response.data.data.schemes.map(
        (item: IReactionPreviewData) => {
          item.createdAt = dayjs(item.createdAt).format("DD.MM.YYYY");
          item.updatedAt = dayjs(item.updatedAt).format("DD.MM.YYYY");
          return item;
        }
      );

      return {
        schemePreviews,
        currentPage: response.data.data.currentPage,
        totalPages: response.data.data.totalPages,
      };
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

export const getSingleScheme = createAsyncThunk<ISchemeData, string>(
  "schemes/getSingleScheme",
  async (schemeId: string, thunkAPI) => {
    try {
      const response = await privateApi.get(`/api/schemes/${schemeId}`);

      if (!response.data) {
        if (request.isAxiosError(response) && response.response) {
          return thunkAPI.rejectWithValue({
            message: response.response.data.message,
            code: response.response.data.code || null,
          });
        }
        return thunkAPI.rejectWithValue({
          message: getErrorMessage(response),
          code: null,
        });
      }

      const result = {
        ...response.data.data,
        createdAt: dayjs(response.data.data.createdAt).format("DD.MM.YYYY"),
        updatedAt: dayjs(response.data.data.updatedAt).format("DD.MM.YYYY"),
      };

      return result;
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

export const getSchemeAndStage = createAsyncThunk<
  IgetSchemeAndStagePayload,
  IgetSchemeAndStageParams
>("schemes/getSchemeAndStage", async ({ schemeId, stageId }, thunkAPI) => {
  try {
    const response = await privateApi.get(`/api/schemes/${schemeId}`);

    if (!response.data) {
      if (request.isAxiosError(response) && response.response) {
        return thunkAPI.rejectWithValue({
          message: response.response.data.message,
          code: response.response.data.code || null,
        });
      }
      return thunkAPI.rejectWithValue({
        message: getErrorMessage(response),
        code: null,
      });
    }

    const schemeData = {
      ...response.data.data,
      createdAt: dayjs(response.data.data.createdAt).format("DD.MM.YYYY"),
      updatedAt: dayjs(response.data.data.updatedAt).format("DD.MM.YYYY"),
    };

    const stageData = schemeData.stages.find(
      (item: IStage) => item._id === stageId
    );

    if (!stageData) {
      return thunkAPI.rejectWithValue({
        message: "Invalid stage ID",
        code: 404,
      });
    }

    return { schemeData, stageData };
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

export const saveCurrentStageData = createAsyncThunk<void, IStage>(
  "schemes/saveCurrentStageData",
  async (currentStage, thunkAPI) => {
    try {
      await privateApi.patch(
        `/api/schemes/updateStage/${currentStage._id}`,
        currentStage
      );
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

export const addNewScheme = createAsyncThunk<
  IAddNewSchemePayload,
  IAddNewSchemeParams
>("schemes/addNewScheme", async (data, thunkAPI) => {
  try {
    const response = await privateApi.post("/api/schemes/", data);
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
