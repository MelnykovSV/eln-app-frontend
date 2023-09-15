import { calc } from "./molMass";
const OCL = require("openchemlib");

export function smilesToMolecularFormula(smiles: string) {
  if (!smiles) {
    smiles = "";
  }
  try {
    const molecule = OCL.Molecule.fromSmiles(smiles);
    const formula = molecule.getMolecularFormula().formula;
    return formula;
  } catch (error) {
    // console.error("Error converting SMILES to molecular formula:", error);
    return "";
    //если возвращть null, либа выдает ошибку
  }
}

export function smilesToMolWeight(smiles: string) {
  if (!smiles) {
    return 0;
  }
  const formula = smilesToMolecularFormula(smiles);
  return calc(formula) as unknown as number;
}

export function formulaToMolWeight(formula: string) {
  if (!formula) {
    formula = "";
  }
  return calc(formula);
}
