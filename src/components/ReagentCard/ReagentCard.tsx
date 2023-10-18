import Container from "./ReagentCard.styled";
import { SingleMolCanvas } from "../../ui";
import { IReagentCardProps } from "../../types";
import { nanoid } from "nanoid";

const ReagentCard = ({
  reagentData: { smiles, mass, formula, molWeight, compoundName },
}: IReagentCardProps) => {
  return (
    <Container>
      <div className="reagent-canvas-wrapper">
        <SingleMolCanvas
          smiles={smiles}
          options={{ width: 200, height: 200 }}></SingleMolCanvas>
      </div>

      <div className="mol-info">
        <ul className="mol-info__first">
          <li>Mass: {mass || "____"} g</li>
          <li>
            Molecular formula:{" "}
            {formula.split("").map((item) => {
              if (!isNaN(Number(item))) {
                return <sub key={nanoid()}>{item}</sub>;
              }
              return item;
            })}
          </li>
          <li>Molecular Weight: {molWeight} g/mol</li>
        </ul>
        <ul className="mol-info__second">
          <li>SMILES: {smiles}</li>
          <li>Compound name: {compoundName || "Can't name this compound"}</li>
        </ul>
      </div>
    </Container>
  );
};

export default ReagentCard;
