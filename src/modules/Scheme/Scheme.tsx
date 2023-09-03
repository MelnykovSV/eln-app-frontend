import Container from "./Scheme.styled";
import { ISchemeProps } from "../../types/componentsProps";
import { SynthesisSchemeStage } from "../../components";
import { nanoid } from "nanoid";
import { SingleMolCanvas } from "../../ui";
import { smilesToMolWeight } from "../../helpers/chemistryHelpers";

const Scheme = ({
  schemeData: {
    startingMaterial,
    targetCompound,
    totalYieldCoefficient,
    mass,
    stages,
  },
}: ISchemeProps) => {
  const n = mass / smilesToMolWeight(targetCompound);
  return (
    <Container>
      <div className="starting-material-canvas-container">
        <SingleMolCanvas
          smiles={startingMaterial}
          options={{ width: 110, height: 110 }}
        />
        <p>
          {totalYieldCoefficient
            ? (smilesToMolWeight(startingMaterial) * n) / totalYieldCoefficient
            : null}
        </p>
      </div>
      {stages.map((item) => (
        <SynthesisSchemeStage stageData={item} n={n} key={nanoid()} />
      ))}
    </Container>
  );
};

export default Scheme;
