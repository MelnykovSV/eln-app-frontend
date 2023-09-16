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
        isOk: false,
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
        isOk: false,
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
      const reagent =
        state.currentStage.attempts[action.payload.attemptNumber - 1].reagents[
          action.payload.reagentNumber - 1
        ];
      switch (action.payload.fieldName) {
        case "smiles":
          reagent.smiles = action.payload.smiles;

          reagent.molecularWeight =
            smilesToMolWeight(action.payload.smiles) || null;

          if (
            reagent.molecularWeight !== null &&
            reagent.equivalents !== null
          ) {
            reagent.mass = Number(
              (reagent.molecularWeight * reagent.equivalents).toFixed(4)
            );
          }
          break;
        case "mass":
          reagent.mass = action.payload.mass;
          if (reagent.molecularWeight) {
            console.log(reagent.molecularWeight);
            reagent.equivalents = Number(
              (action.payload.mass / reagent.molecularWeight).toFixed(4)
            );
          }

          break;
        case "equivalents":
          reagent.equivalents = action.payload.equivalents;
          if (
            reagent.molecularWeight !== null &&
            reagent.equivalents !== null
          ) {
            reagent.mass = Number(
              (reagent.molecularWeight * reagent.equivalents).toFixed(4)
            );
          }
          break;
      }
    },

    setAttemptInfo(
      state,
      action: PayloadAction<{
        [key: string]: string | number | null | boolean;
        attemptNumber: number;
        fieldName: string;
      }>
    ) {
      const attempt =
        state.currentStage.attempts[action.payload.attemptNumber - 1];

      switch (action.payload.fieldName) {
        case "methodic":
        case "solvent":
        case "time": {
          const fieldValue =
            (action.payload[action.payload.fieldName] as string) || null;
          attempt[action.payload.fieldName] = fieldValue;
          break;
        }
        case "_yield": {
          const fieldValue =
            Number(action.payload[action.payload.fieldName]) || null;
          attempt[action.payload.fieldName] = fieldValue;
          if (
            attempt.startingMaterialMass &&
            attempt.productPurity &&
            state.currentStage.startingMaterial &&
            state.currentStage.product
          ) {
            if (!fieldValue) {
              attempt.productMass = null;
            } else {
              const productPurity = attempt.productPurity;
              const startingMaterialN =
                attempt.startingMaterialMass /
                smilesToMolWeight(state.currentStage.startingMaterial);
              const productYield = fieldValue;
              const productMolWeight = smilesToMolWeight(
                state.currentStage.product
              );

              attempt.productMass = Number(
                (
                  (startingMaterialN *
                    productMolWeight *
                    productYield *
                    productPurity) /
                  10000
                ).toFixed(4)
              );
            }
          }
          break;
        }
        case "temp":
        case "startingMaterialMass": {
          const fieldValue =
            Number(action.payload[action.payload.fieldName]) || null;
          attempt[action.payload.fieldName] = fieldValue;
          if (
            attempt.productPurity &&
            attempt.productMass &&
            state.currentStage.startingMaterial &&
            state.currentStage.product
          ) {
            if (!fieldValue) {
              attempt._yield = null;
            } else {
              const productMass = attempt.productMass;
              const startingMaterialN =
                fieldValue /
                smilesToMolWeight(state.currentStage.startingMaterial);
              const productPurity = attempt.productPurity;
              const productMolWeight = smilesToMolWeight(
                state.currentStage.product
              );

              // attempt.reagents.forEach((item) => {
              //   if (item.equivalents && item.molecularWeight) {
              //     item.mass =
              //       startingMaterialN * item.molecularWeight * item.equivalents;
              //   }
              // });

              attempt._yield = Number(
                (
                  ((productMass * productPurity) /
                    100 /
                    (startingMaterialN * productMolWeight)) *
                  100
                ).toFixed(4)
              );
            }
          }
          break;
        }
        case "productMass": {
          const fieldValue =
            Number(action.payload[action.payload.fieldName]) || null;
          attempt[action.payload.fieldName] = fieldValue;
          if (
            attempt.startingMaterialMass &&
            attempt.productPurity &&
            state.currentStage.startingMaterial &&
            state.currentStage.product
          ) {
            if (!fieldValue) {
              attempt._yield = null;
            } else {
              const productPurity = attempt.productPurity;
              const startingMaterialN =
                attempt.startingMaterialMass /
                smilesToMolWeight(state.currentStage.startingMaterial);
              const productMass = fieldValue;
              const productMolWeight = smilesToMolWeight(
                state.currentStage.product
              );

              attempt._yield = Number(
                (
                  ((productMass * productPurity) /
                    100 /
                    (startingMaterialN * productMolWeight)) *
                  100
                ).toFixed(4)
              );
            }
          }
          break;
        }
        case "productPurity": {
          const fieldValue =
            Number(action.payload[action.payload.fieldName]) || null;
          attempt[action.payload.fieldName] = fieldValue;

          if (
            attempt.startingMaterialMass &&
            attempt.productMass &&
            state.currentStage.startingMaterial &&
            state.currentStage.product
          ) {
            if (!fieldValue) {
              attempt._yield = null;
            } else {
              const productMass = attempt.productMass;
              const startingMaterialN =
                attempt.startingMaterialMass /
                smilesToMolWeight(state.currentStage.startingMaterial);
              const productPurity = fieldValue;
              const productMolWeight = smilesToMolWeight(
                state.currentStage.product
              );

              attempt._yield = Number(
                (
                  ((productMass * productPurity) /
                    100 /
                    (startingMaterialN * productMolWeight)) *
                  100
                ).toFixed(4)
              );
            }
          }

          break;
        }
        case "type": {
          const fieldValue = action.payload[action.payload.fieldName] as
            | "test"
            | "scaling";
          attempt[action.payload.fieldName] = fieldValue;
          break;
        }
        case "isOk": {
          const fieldValue = action.payload[
            action.payload.fieldName
          ] as boolean;
          attempt[action.payload.fieldName] = fieldValue;
          break;
        }
      }
    },
    setAttemptStatus(state, action: PayloadAction<{ attemptNumber: number }>) {
      const attempt =
        state.currentStage.attempts[action.payload.attemptNumber - 1];
      attempt.isOk = !attempt.isOk;
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
export const {
  clearSchemesData,
  setAttemptReagentData,
  setAttemptInfo,
  setAttemptStatus,
} = schemesSlice.actions;
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
