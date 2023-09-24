import Container from "./ReagentCard.styled";
import { SingleMolCanvas } from "../../ui";
import { IReagentCardProps } from "../../types";

const ReagentCard = ({
  reagentData: { smiles, mass, formula, molWeight, compoundName },
}: IReagentCardProps) => {
  return (
    <Container>
      <SingleMolCanvas
        smiles={smiles}
        options={{ width: 200, height: 200 }}></SingleMolCanvas>

      <div className="mol-info">
        <ul className="mol-info__first">
          <li>Mass: {mass} g</li>
          <li>
            Molecular formula:{" "}
            {
              formula.split("").map((item) => {
                if (!isNaN(Number(item))) {
                  return <sub>{item}</sub>;
                }
                return item;
              })

              // formula.replace(/\d+/g, "<sub>$&</sub>")
            }
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
