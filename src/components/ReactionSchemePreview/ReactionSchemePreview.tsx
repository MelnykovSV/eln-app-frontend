import Container from "./ReactionSchemePreview.styled";
import { SingleMolCanvas } from "../";
// import { testSchemePreviewData } from "../../testData";
import { IReactionSchemePreviewProps } from "../../types";
import { DoubleArrows } from "../";
import { useState } from "react";

const ReactionSchemePreview = ({
  schemePreviewData,
}: IReactionSchemePreviewProps) => {
  const [isActive, setIsActive] = useState(false);

  const handleMouseEnter = () => {
    setIsActive(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsActive(false);
    }, 300);
  };
  return (
    <Container
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ zIndex: isActive ? 10 : 0 }}>
      <div className="canvas-container  ">
        <SingleMolCanvas
          smiles={schemePreviewData.startingMaterial}></SingleMolCanvas>
        <DoubleArrows stagesNumber={schemePreviewData.stagesNumber} />

        <SingleMolCanvas
          smiles={schemePreviewData.targetCompound}></SingleMolCanvas>
      </div>

      <div className="scheme-info">
        <dl className="scheme-info__additional">
          <div>
            <dt>Created at</dt>
            <dd>{schemePreviewData.createdAt}</dd>
          </div>
          <div>
            <dt>Updated at</dt>
            <dd>{schemePreviewData.updatedAt}</dd>
          </div>
        </dl>
        <dl className="scheme-info__main">
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
        </dl>
      </div>
    </Container>
  );
};

export default ReactionSchemePreview;
