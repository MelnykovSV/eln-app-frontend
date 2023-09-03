import Container from "./Scheme.styled";
import { ISchemeProps } from "../../types/componentsProps";
import { SynthesisSchemeStage } from "../../components";
import { nanoid } from "nanoid";
import { SingleMolCanvas } from "../../ui";

const Scheme = ({ schemeData: { startingMaterial, stages } }: ISchemeProps) => {
  return (
    <Container>
      <div className="starting-material-canvas-container">
        <SingleMolCanvas
          smiles={startingMaterial}
          options={{ width: 110, height: 110 }}
        />
      </div>
      {stages.map((item) => (
        <SynthesisSchemeStage stageData={item} key={nanoid()} />
      ))}
    </Container>
  );
};

export default Scheme;
