import Container from "./SynthesisSchemeStage.styled";
import { SingleMolCanvas } from "../../ui";
import { SingleArrow } from "../../ui";
import { ISynthesisSchemeStageProps } from "../../types";

const SynthesisSchemeStage = ({
  stageData: { solvent, temp, time, _yield, methodic, product },
}: ISynthesisSchemeStageProps) => {
  return (
    <Container>
      <div className="conditions-container">
        <p>
          {solvent}, {temp} &deg, {time}
        </p>
        <SingleArrow />
        <p>{_yield} %</p>
        <div className="methodic-container">
          <p className="methodic">{methodic}</p>
        </div>
      </div>
      <div className="drawing-container">
        <SingleMolCanvas
          smiles={product}
          options={{ width: 110, height: 110 }}></SingleMolCanvas>
      </div>
    </Container>
  );
};

export default SynthesisSchemeStage;
