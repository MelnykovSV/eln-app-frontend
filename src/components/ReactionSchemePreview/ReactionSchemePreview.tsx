import Container from "./ReactionSchemePreview.styled";
import { SingleMolCanvas } from "../";
import { testSchemePreviewData } from "../../testData";
import { IReactionSchemePreviewProps } from "../../types";

const ReactionSchemePreview = ({
  schemePreviewData,
}: IReactionSchemePreviewProps) => {
  return (
    <Container>
      <div className="canvas-container  ">
        <SingleMolCanvas
          smiles={schemePreviewData.startingMaterial}></SingleMolCanvas>
        <SingleMolCanvas
          smiles={schemePreviewData.targetCompound}></SingleMolCanvas>
      </div>

      <div className="scheme-info">
        <dl>
          <div>
            <dt>Mass</dt>
            <dd>{schemePreviewData.mass}</dd>
          </div>
          <div>
            <dt>Price</dt>
            <dd>{schemePreviewData.price}</dd>
          </div>
          <div>
            <dt>Deadline</dt>
            <dd>{schemePreviewData.deadline}</dd>
          </div>
          <div>
            <dt>Created at</dt>
            <dd>{schemePreviewData.createdAt}</dd>
          </div>
          <div>
            <dt>Updated at</dt>
            <dd>{schemePreviewData.updatedAt}</dd>
          </div>
        </dl>
      </div>
    </Container>
  );
};

export default ReactionSchemePreview;
