import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { isError, isPending } from "../statusCheckers";

import { IState, ISchemesState } from "../../types";
import { getSchemes, getSingleScheme } from "./operations";
import { IReactionPreviewData } from "../../types";

const initialState: ISchemesState = {
  schemePreviews: [],
  currentScheme: {
    _id: null,
    status: null,
    mass: null,
    price: null,
    deadline: null,
    startingMaterial: null,
    targetCompound: null,
    createdAt: null,
    updatedAt: null,
    stages: [],
  },
  status: "idle",
  isLoading: false,
  error: null,
};

const schemesSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    clearSchemesData(state) {
      state.schemePreviews = [];
      state.currentScheme = {
        _id: null,
        status: null,
        mass: null,
        price: null,
        deadline: null,
        startingMaterial: null,
        targetCompound: null,
        createdAt: null,
        updatedAt: null,
        stages: [],
      };
      state.isLoading = false;
      state.status = "idle";
      state.error = null;
    },
    // updateTokens(state, action: PayloadAction<any>) {
    //   state.accessToken = action.payload.accessToken;
    //   state.refreshToken = action.payload.refreshToken;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getSchemes.fulfilled,
      (state, action: PayloadAction<IReactionPreviewData[]>) => {
        state.schemePreviews = action.payload;
        state.isLoading = false;
        state.status = "fulfilled";
        state.error = null;
      }
    );
    builder.addCase(
      getSingleScheme.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.currentScheme = action.payload;
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
export const { clearSchemesData } = schemesSlice.actions;
export const getSchemePreviews = (state: IState) =>
  state.schemes.schemePreviews;

export const getCurrentScheme = (state: IState) => state.schemes.currentScheme;

export const getCurrentSchemeId = (state: IState) =>
  state.schemes.currentScheme._id;

export {};
