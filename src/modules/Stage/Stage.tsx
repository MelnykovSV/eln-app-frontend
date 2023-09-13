import Container from "./Stage.styled";
import { AttemptTab } from "../../components";

const Stage = () => {
  return (
    <Container>
      {/* <div className="canvas-container  ">
        <SingleMolCanvas
          smiles={schemePreviewData.startingMaterial}></SingleMolCanvas>
        <DoubleArrows stagesNumber={schemePreviewData.stagesNumber} />

        <SingleMolCanvas
          smiles={schemePreviewData.targetCompound}></SingleMolCanvas>
      </div> */}

      <AttemptTab />
    </Container>
  );
};

export default Stage;
