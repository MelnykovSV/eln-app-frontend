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
  let n: number;

  if (!startingMaterial) {
    startingMaterial = "";
  }
  if (!targetCompound) {
    targetCompound = "";
  }
  if (!mass || !startingMaterial || !targetCompound) {
    n = 0;
  } else {
    n = mass / smilesToMolWeight(targetCompound);
  }

  const lastOkStageNumber =
    stages.findIndex((item) => item.testSuccess !== true) === -1
      ? stages.length - 1
      : stages.findIndex((item) => item.testSuccess !== true) - 1;
  return (
    <Container className="scheme">
      <div>
        <div className="starting-material-canvas-container">
          <SingleMolCanvas
            smiles={startingMaterial}
            options={{ width: 110, height: 110 }}
          />
          {totalYieldCoefficient ? (
            <p>
              {(
                (smilesToMolWeight(startingMaterial) * n) /
                totalYieldCoefficient
              ).toFixed(2)}{" "}
              g
            </p>
          ) : null}
        </div>
        {(stages.length && targetCompound) || stages.length > 1
          ? stages.map((item, i) => (
              <SynthesisSchemeStage
                stageData={item}
                n={n}
                key={nanoid()}
                isCurrentStage={i === lastOkStageNumber}
              />
            ))
          : null}
      </div>
    </Container>
  );
};

export default Scheme;
