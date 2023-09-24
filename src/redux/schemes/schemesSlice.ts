import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { isError, isPending } from "../statusCheckers";
import { IState, ISchemesState } from "../../types";
import {
  getSchemes,
  getSingleScheme,
  getSchemeAndStage,
  IgetSchemeAndStagePayload,
  addSpectr,
  saveCurrentStageData,
  updateSchemeStatusAndSave,
} from "./operations";
import { IReactionPreviewData } from "../../types";
import { smilesToMolWeight } from "../../helpers/chemistryHelpers";
import {
  currentSchemeInitialValue,
  currentStageInitialValue,
  setAttemptInitialValue,
} from "./initialValues";
import { schemeDataSynchronyzer } from "../../helpers/schemeDataSynchronyzer";
import {
  ISchemeData,
  ICurrentScheme,
  IStage,
  IAttempt,
} from "../../types/redux";
import { IAddFilePayload } from "./operations";

const initialState: ISchemesState = {
  schemePreviews: [],
  currentScheme: JSON.parse(JSON.stringify(currentSchemeInitialValue)),
  currentStage: JSON.parse(JSON.stringify(currentStageInitialValue)),
  status: "idle",
  isLoading: false,
  error: null,
};

const schemesSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    initialUpdateCurrentStage(state, action: PayloadAction<string>) {
      console.log("this");
      const stage = state.currentScheme.stages.find(
        (item) => item._id === action.payload
      );
      if (stage && stage._id !== state.currentStage._id) {
        state.currentStage = { ...state.currentStage, ...stage };
      }
    },
    temporalSaveStageData(state) {
      state.currentStage.isChanged = false;
    },
    setSchemeStatus(state, action: PayloadAction<string>) {
      state.currentScheme.status = action.payload;
    }, // не нужно?
    updateCurrentStage(state, action: PayloadAction<string>) {
      const stage = state.currentScheme.stages.find(
        (item) => item._id === action.payload
      );
      console.log(stage);
      if (stage) {
        state.currentStage = { ...state.currentStage, ...stage };
        state.currentStage.isChanged = true;
      }
    },
    addAttempt(state) {
      const attemptnumber = state.currentStage.attempts.length + 1;
      state.currentStage.attempts.push(
        setAttemptInitialValue(attemptnumber) as IAttempt
      );
    },
    clearSchemesData(state) {
      state.schemePreviews = [];
      state.currentScheme = currentSchemeInitialValue;
      state.currentStage = currentStageInitialValue as IStage;
      state.isLoading = false;
      state.status = "idle";
      state.error = null;
    },
    setAttemptReagentData(
      state,
      action: PayloadAction<{
        reagentNumber: number;
        [key: string]: any;
        attemptNumber: number;
        fieldName: string;
      }>
    ) {
      state.currentStage.isChanged = true;
      const reagent =
        state.currentStage.attempts[action.payload.attemptNumber - 1].reagents[
          action.payload.reagentNumber - 1
        ];

      const attempt =
        state.currentStage.attempts[action.payload.attemptNumber - 1];
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
          reagent.mass =
            Number(action.payload.mass) > 0
              ? (reagent.mass = Number(action.payload.mass))
              : null;
          if (
            reagent.molecularWeight &&
            attempt.startingMaterialMass !== null &&
            state.currentStage.startingMaterial !== null
          ) {
            const startingMaterialN =
              attempt.startingMaterialMass /
              smilesToMolWeight(state.currentStage.startingMaterial);
            reagent.equivalents =
              Number(
                (
                  action.payload.mass /
                  (reagent.molecularWeight * startingMaterialN)
                ).toFixed(4)
              ) > 0
                ? Number(
                    (
                      action.payload.mass /
                      (reagent.molecularWeight * startingMaterialN)
                    ).toFixed(4)
                  )
                : null;
          }

          break;
        case "equivalents":
          reagent.equivalents =
            Number(action.payload.equivalents) > 0
              ? (reagent.equivalents = Number(action.payload.equivalents))
              : null;
          if (
            reagent.molecularWeight !== null &&
            reagent.equivalents !== null &&
            attempt.startingMaterialMass !== null &&
            state.currentStage.startingMaterial !== null
          ) {
            const startingMaterialN =
              attempt.startingMaterialMass /
              smilesToMolWeight(state.currentStage.startingMaterial);
            reagent.mass = Number(
              (
                reagent.molecularWeight *
                reagent.equivalents *
                startingMaterialN
              ).toFixed(4)
            );
          }
          break;
      }

      state.currentScheme.stages = state.currentScheme.stages.map((item) => {
        if (item._id === state.currentStage._id) {
          const { isChanged, ...payload } = item;
          console.log({ ...item });
          console.log(payload);

          return { ...item, ...payload };
        }
        return item;
      });

      //synchronyzes currentScheme with currentStage

      schemeDataSynchronyzer(state);
    },

    setAttemptInfo(
      state,
      action: PayloadAction<{
        [key: string]: string | number | null | boolean;
        attemptNumber: number;
        fieldName: string;
      }>
    ) {
      state.currentStage.isChanged = true;
      const attempt =
        state.currentStage.attempts[action.payload.attemptNumber - 1];

      switch (action.payload.fieldName) {
        case "notes":
        case "methodic":
        case "solvent":
        case "time": {
          const fieldValue =
            (action.payload[action.payload.fieldName] as string) || null;
          attempt[action.payload.fieldName] = fieldValue;

          if (attempt.isOk) {
            state.currentStage[action.payload.fieldName] = fieldValue;
          }
          break;
        }
        case "temp": {
          const fieldValue =
            (action.payload[action.payload.fieldName] as number) > 0
              ? (action.payload[action.payload.fieldName] as number)
              : null;
          attempt[action.payload.fieldName] = Number(fieldValue);
          if (attempt.isOk) {
            state.currentStage[action.payload.fieldName] = Number(fieldValue);
          }
          break;
        }

        case "_yield": {
          const fieldValue =
            Number(action.payload[action.payload.fieldName]) > 0
              ? Number(action.payload[action.payload.fieldName])
              : null;
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

        case "startingMaterialMass": {
          const fieldValue =
            Number(action.payload[action.payload.fieldName]) > 0
              ? Number(action.payload[action.payload.fieldName])
              : null;
          attempt[action.payload.fieldName] = fieldValue;
          attempt.reagents.forEach((item) => {
            if (
              item.equivalents &&
              item.molecularWeight &&
              state.currentStage.startingMaterial
            ) {
              if (fieldValue) {
                item.mass = Number(
                  (
                    (fieldValue /
                      smilesToMolWeight(state.currentStage.startingMaterial)) *
                    item.molecularWeight *
                    item.equivalents
                  ).toFixed(4)
                );
              } else {
                item.mass = null;
              }
            }
          });
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

              attempt._yield = Number(
                (
                  ((productMass * productPurity) /
                    100 /
                    (startingMaterialN * productMolWeight)) *
                  100
                ).toFixed(4)
              );
              if (attempt.isOk) {
                state.currentStage._yield = attempt._yield;
              }
            }
          }
          break;
        }
        case "productMass": {
          const fieldValue =
            Number(action.payload[action.payload.fieldName]) > 0
              ? Number(action.payload[action.payload.fieldName])
              : null;
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
              if (attempt.isOk) {
                state.currentStage._yield = attempt._yield;
              }
            }
          }
          break;
        }
        case "productPurity": {
          const fieldValue =
            Number(action.payload[action.payload.fieldName]) > 0
              ? Number(action.payload[action.payload.fieldName])
              : null;
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

              if (attempt.isOk) {
                state.currentStage._yield = attempt._yield;
              }
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

      //synchronyzes currentScheme with currentStage
      schemeDataSynchronyzer(state);
    },
    setAttemptStatus(state, action: PayloadAction<{ attemptNumber: number }>) {
      state.currentStage.isChanged = true;
      state.currentStage.attempts.map((attempt) => {
        if (attempt.attemptNumber !== action.payload.attemptNumber) {
          attempt.isOk = false;
        } else {
          attempt.isOk = !attempt.isOk;
          state.currentStage.testSuccess = attempt.isOk;
        }
        return attempt;
      });

      if (state.currentStage.attempts[action.payload.attemptNumber - 1].isOk) {
        state.currentStage.methodic =
          state.currentStage.attempts[
            action.payload.attemptNumber - 1
          ].methodic;
        state.currentStage.time =
          state.currentStage.attempts[action.payload.attemptNumber - 1].time;
        state.currentStage.solvent =
          state.currentStage.attempts[action.payload.attemptNumber - 1].solvent;
        state.currentStage.temp =
          state.currentStage.attempts[action.payload.attemptNumber - 1].temp;
        state.currentStage._yield =
          state.currentStage.attempts[action.payload.attemptNumber - 1]._yield;
      }

      schemeDataSynchronyzer(state);
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
      (state, action: PayloadAction<ISchemeData>) => {
        state.currentScheme = action.payload;
        state.currentStage = currentStageInitialValue as IStage;
        state.isLoading = false;
        state.status = "fulfilled";
        state.error = null;
      }
    );
    builder.addCase(
      saveCurrentStageData.fulfilled,
      (state, action: PayloadAction<void>) => {
        state.currentStage.isChanged = false;
        state.isLoading = false;
        state.status = "fulfilled";
        state.error = null;
      }
    );
    builder.addCase(
      updateSchemeStatusAndSave.fulfilled,
      (state, action: PayloadAction<string>) => {
        state.currentScheme.status = action.payload;
        state.isLoading = false;
        state.status = "fulfilled";
        state.error = null;
      }
    );
    builder.addCase(
      getSchemeAndStage.fulfilled,
      (state, action: PayloadAction<IgetSchemeAndStagePayload>) => {
        state.currentScheme = action.payload.schemeData;
        state.currentStage = action.payload.stageData;
        state.currentStage.isChanged = false;
        state.isLoading = false;
        state.status = "fulfilled";
        state.error = null;
      }
    );
    builder.addCase(
      addSpectr.fulfilled,
      (state, action: PayloadAction<IAddFilePayload>) => {
        const { schemeId, stageId, attemptNumber, spectra } = action.payload;
        state.currentStage.attempts[attemptNumber - 1].spectra = spectra;

        console.log(spectra);
        schemeDataSynchronyzer(state);

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
  updateCurrentStage,
  initialUpdateCurrentStage,
  addAttempt,
  temporalSaveStageData,
  setSchemeStatus,
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
