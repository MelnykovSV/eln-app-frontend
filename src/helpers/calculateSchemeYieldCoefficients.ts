export interface ISchemeData {
  startingMaterial: string | null;
  targetCompound: string | null;
  mass: number | null;
  totalYieldCoefficient?: number;
  stages: {
    solvent: string | null;
    temp: number | null;
    time: string | null;
    _yield: number | null;
    methodic: string | null;
    product: string | null;
    yieldCoefficient?: number;
  }[];
}

export const calculateSchemeYieldCoefficients = (obj: ISchemeData) => {
  // if (!obj.stages.length) {
  //   return obj;
  // }
  const arr = [...obj.stages];

  if (arr.some((item) => item._yield === null)) {
    return obj;
  } else {
    arr.reverse();
    const coefficients = arr.reduce((acc: number[], item) => {
      if (acc.length) {
        return [...acc, (item._yield! / 100) * acc[acc.length - 1]];
      } else {
        return [...acc, item._yield! / 100];
      }
    }, []);

    arr.reverse();
    coefficients.reverse();

    const result = arr.map((item: any, i: number) => ({
      ...item,
      yieldCoefficient: coefficients[i + 1] || 1,
    }));

    return {
      ...obj,
      stages: result,
      totalYieldCoefficient: coefficients[0],
    };
  }
};
