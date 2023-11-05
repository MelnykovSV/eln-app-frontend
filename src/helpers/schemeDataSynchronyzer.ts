import { ISchemesState } from "../types";
import { IStage } from "../types/redux";
export const schemeDataSynchronyzer = (state: ISchemesState) => {
  state.currentScheme.stages = state.currentScheme.stages.map(
    (item: IStage) => {
      if (item._id === state.currentStage._id) {
        const { isChanged, ...payload } = state.currentStage;
        return { ...item, ...payload };
      }
      return item;
    }
  );
};
