export const schemeDataSynchronyzer = (state: any) => {
  state.currentScheme.stages = state.currentScheme.stages.map((item: any) => {
    if (item._id === state.currentStage._id) {
      const { isChanged, ...payload } = state.currentStage;
      return { ...item, ...payload };
    }
    return item;
  });
};
