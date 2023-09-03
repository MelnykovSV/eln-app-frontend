import Container from "./SynthesisSchemeStage.styled";
import { SingleMolCanvas } from "../../ui";
import { SingleArrow } from "../../ui";
import { ISynthesisSchemeStageProps } from "../../types";
import { smilesToMolWeight } from "../../helpers/chemistryHelpers";

const SynthesisSchemeStage = ({
  stageData: {
    solvent,
    temp,
    time,
    _yield,
    methodic,
    product,
    yieldCoefficient,
  },
  n,
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
        <p className="calculated-mass">
          {yieldCoefficient
            ? (n * smilesToMolWeight(product)) / yieldCoefficient
            : null}
        </p>
      </div>
    </Container>
  );
};

export default SynthesisSchemeStage;
