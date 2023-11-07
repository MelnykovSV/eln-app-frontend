import * as S from "./SynthesisSchemeStage.styled";
import { SingleMolCanvas, SingleArrow } from "../../ui";
import { ISynthesisSchemeStageProps } from "../../types";
import { smilesToMolWeight } from "../../helpers/chemistryHelpers";
import { useNavigate } from "react-router";
import { useAppSelector } from "../../redux/hooks";
import { getCurrentSchemeId } from "../../redux/schemes/schemesSlice";

const SynthesisSchemeStage = ({
  stageData: {
    _id,
    solvent,
    temp,
    time,
    _yield,
    methodic,
    product,
    yieldCoefficient,
  },
  n,
  isCurrentStage,
  z,
}: ISynthesisSchemeStageProps) => {
  if (!product) {
    product = "";
  }

  const navigate = useNavigate();
  const currentSchemeId = useAppSelector(getCurrentSchemeId);

  const stageClickHandler = () => {
    if (_id) {
      navigate(`/stage/${currentSchemeId}/${_id}`);
    }
  };
  return (
    <S.Container
      onClick={stageClickHandler}
      className={isCurrentStage ? "currentStage" : ""}
      style={{ zIndex: z }}>
      <div className="conditions-container">
        <p>
          {solvent ? <span>{solvent}</span> : null}
          {(solvent && temp) || (solvent && time) ? <span>, </span> : null}
          {temp ? <span>{temp} &#8451;</span> : null}
          {temp && time ? <span>,</span> : null}
          {time ? <span> {time} h</span> : null}
        </p>
        <SingleArrow />
        {_yield ? <p>{_yield} %</p> : null}
        {methodic ? (
          <div className="methodic-container">
            <div className="methodic">{methodic}</div>
          </div>
        ) : null}
      </div>
      <div className="drawing-container">
        <SingleMolCanvas
          smiles={product}
          options={{ width: 110, height: 110 }}></SingleMolCanvas>
        {yieldCoefficient ? (
          <p className="calculated-mass">
            {((n * smilesToMolWeight(product)) / yieldCoefficient).toFixed(2)} g
          </p>
        ) : null}
      </div>
    </S.Container>
  );
};

export default SynthesisSchemeStage;
