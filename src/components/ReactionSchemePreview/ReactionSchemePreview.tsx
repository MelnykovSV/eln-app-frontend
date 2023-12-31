import * as S from "./ReactionSchemePreview.styled";
import { SingleMolCanvas, DoubleArrows } from "../../ui";
import { IReactionSchemePreviewProps } from "../../types";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { useAppDispatch } from "../../redux/hooks";
import { updateSchemesState } from "../../redux/schemes/schemesSlice";
import dayjs from "dayjs";

const ReactionSchemePreview = ({
  schemePreviewData,
}: IReactionSchemePreviewProps) => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);

  const handleMouseEnter = () => {
    setIsActive(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsActive(false);
    }, 300);
  };

  const getSchemeType = () => {
    if (schemePreviewData.status === "chosen") {
      return "chosen";
    }
    if (schemePreviewData.status === "fail") {
      return "fail";
    }
    if (schemePreviewData.status === "success") {
      return "success";
    }
    return "black";
  };
  return (
    <S.Container
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => {
        dispatch(updateSchemesState(location));
        navigate(`/scheme/${schemePreviewData._id}`);
      }}
      style={{
        zIndex: isActive ? 10 : 0,
      }}
      className={getSchemeType()}>
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
            <dd>{schemePreviewData.mass} g</dd>
          </div>
          <div>
            <dt>Price</dt>
            <dd>{schemePreviewData.price} $</dd>
          </div>
          <div>
            <dt>Deadline</dt>
            <dd>
              {dayjs(schemePreviewData.deadline).format("DD.MM.YYYY") !==
                "10.10.2040"?dayjs(schemePreviewData.deadline).format("DD.MM.YYYY"):'none'}
            </dd>
          </div>
        </dl>
      </div>
    </S.Container>
  );
};

export default ReactionSchemePreview;
