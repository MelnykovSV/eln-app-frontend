import { calc } from "./molMass";
const OCL = require("openchemlib");

export function smilesToMolecularFormula(smiles: string) {
  try {
    const molecule = OCL.Molecule.fromSmiles(smiles);
    const formula = molecule.getMolecularFormula().formula;
    return formula;
  } catch (error) {
    console.error("Error converting SMILES to molecular formula:", error);
    return null;
  }
}

export function smilesToMolWeight(smiles: string) {
  const formula = smilesToMolecularFormula(smiles);
  return calc(formula) as unknown as number;
}

export function formulaToMolWeight(formula: string) {
  return calc(formula);
}
