import Container from "./ReagentList.styled";
import { ReagentCard } from "../../components";
import { IReagentListProps } from "../../types";
import { useState, useEffect, useRef } from "react";
import { calc } from "../../helpers/molMass";
import axios from "axios";

const OCL = require("openchemlib");
function smilesToMolecularFormula(smiles: string) {
  try {
    const molecule = OCL.Molecule.fromSmiles(smiles);
    const formula = molecule.getMolecularFormula().formula;
    return formula;
  } catch (error) {
    console.error("Error converting SMILES to molecular formula:", error);
    return null;
  }
}

const smiles = "COC(=O)C1=CC=CC2=NC=CN21"; // Replace with your SMILES notation
const formula = smilesToMolecularFormula(smiles);

if (formula) {
  console.log("Molecular Formula:", formula);
}

const ReagentList = ({ reagents }: IReagentListProps) => {
  const [reagentsArray, setReagentsArray] = useState([] as any);

  useEffect(() => {
    const arr1 = reagents.map(async (item) => {
      const formula = smilesToMolecularFormula(item.smiles);
      const molWeight = calc(formula) as unknown as string;

      const response = await axios.get(
        `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/${item.smiles}/property/IUPACName/JSON`
      );

      console.log(response.data.PropertyTable.Properties[0].IUPACName);

      return {
        smiles: item.smiles,
        mass: item.mass,
        formula,
        molWeight,
        compoundName: response.data.PropertyTable.Properties[0].IUPACName,
      };
    });

    Promise.all(arr1).then((resolvedArr) => {
      console.log("resolvedArr");
      console.log(resolvedArr);
      setReagentsArray(resolvedArr);
    });
  }, []);

  return (
    <Container>
      <div>111</div>
      {reagentsArray.map((item: any) => (
        <ReagentCard reagentData={item} />
      ))}
    </Container>
  );
};

export default ReagentList;
