import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { isError, isPending } from "../statusCheckers";

import { IState, ISchemesState } from "../../types";
import { getSchemes, getSingleScheme } from "./operations";
import { IReactionPreviewData } from "../../types";
import { smilesToMolWeight } from "../../helpers/chemistryHelpers";

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
  currentStage: {
    _id: null,
    _yield: null,
    solvent: null,
    startingMaterial: "ccccc",
    methodic: null,
    temp: null,
    time: null,
    product: "ccccc",
    testSuccess: false,
    scalingSuccess: false,
    isChanged: false,
    attempts: [
      {
        attemptNumber: 1,
        _id: null,
        _yield: null,
        solvent: null,
        methodic: null,
        temp: null,
        time: null,
        startingMaterialMass: null,
        productMass: null,
        productPurity: null,
        type: "test",
        isOk: null,
        spectra: [],
        reagents: [
          {
            reagentNumber: 1,
            smiles: null,
            equivalents: null,
            molecularWeight: null,
            mass: null,
          },
          {
            reagentNumber: 2,
            smiles: null,
            equivalents: null,
            molecularWeight: null,
            mass: null,
          },
          {
            reagentNumber: 3,
            smiles: null,
            equivalents: null,
            molecularWeight: null,
            mass: null,
          },
          {
            reagentNumber: 4,
            smiles: null,
            equivalents: null,
            molecularWeight: null,
            mass: null,
          },
        ],
      },
      {
        attemptNumber: 2,
        _id: null,
        _yield: null,
        solvent: null,
        methodic: null,
        temp: null,
        time: null,
        startingMaterialMass: null,
        productMass: null,
        productPurity: null,
        type: "test",
        isOk: null,
        spectra: [],
        reagents: [
          {
            reagentNumber: 1,
            smiles: null,
            equivalents: null,
            molecularWeight: null,
            mass: null,
          },
          {
            reagentNumber: 2,
            smiles: null,
            equivalents: null,
            molecularWeight: null,
            mass: null,
          },
          {
            reagentNumber: 3,
            smiles: null,
            equivalents: null,
            molecularWeight: null,
            mass: null,
          },
          {
            reagentNumber: 4,
            smiles: null,
            equivalents: null,
            molecularWeight: null,
            mass: null,
          },
        ],
      },
    ],
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
      state.currentStage = {
        _id: null,
        _yield: null,
        solvent: null,
        startingMaterial: null,
        methodic: null,
        temp: null,
        time: null,
        product: null,
        testSuccess: false,
        scalingSuccess: false,
        isChanged: false,
        attempts: [],
      };
      state.isLoading = false;
      state.status = "idle";
      state.error = null;
    },
    setAttemptReagentData(state, action: PayloadAction<any>) {
      const attempt =
        state.currentStage.attempts[action.payload.attemptNumber - 1].reagents[
          action.payload.reagentNumber - 1
        ];
      switch (action.payload.fieldName) {
        case "smiles":
          attempt.smiles = action.payload.smiles;

          attempt.molecularWeight =
            smilesToMolWeight(action.payload.smiles) || null;

          if (
            attempt.molecularWeight !== null &&
            attempt.equivalents !== null
          ) {
            attempt.mass = Number(
              (attempt.molecularWeight * attempt.equivalents).toFixed(4)
            );
          }
          break;
        case "mass":
          attempt.mass = action.payload.mass;
          if (attempt.molecularWeight) {
            console.log(attempt.molecularWeight);
            attempt.equivalents = Number(
              (action.payload.mass / attempt.molecularWeight).toFixed(4)
            );
          }

          break;
        case "equivalents":
          attempt.equivalents = action.payload.equivalents;
          if (
            attempt.molecularWeight !== null &&
            attempt.equivalents !== null
          ) {
            attempt.mass = Number(
              (attempt.molecularWeight * attempt.equivalents).toFixed(4)
            );
          }
          break;
      }
    },
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
export const { clearSchemesData, setAttemptReagentData } = schemesSlice.actions;
export const getSchemePreviews = (state: IState) =>
  state.schemes.schemePreviews;

export const getCurrentScheme = (state: IState) => state.schemes.currentScheme;

export const getCurrentSchemeId = (state: IState) =>
  state.schemes.currentScheme._id;

export const getCurrentStage = (state: IState) => state.schemes.currentStage;
export const getCurrentStageStartingMaterial = (state: IState) =>
  state.schemes.currentStage.startingMaterial;
export const getCurrentStageProduct = (state: IState) =>
  state.schemes.currentStage.product;
export const getCurrentStageAttempts = (state: IState) =>
  state.schemes.currentStage.attempts;
