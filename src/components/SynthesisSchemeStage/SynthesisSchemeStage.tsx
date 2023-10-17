import Container from "./SynthesisSchemeStage.styled";
import { SingleMolCanvas } from "../../ui";
import { SingleArrow } from "../../ui";
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
    <Container
      onClick={stageClickHandler}
      className={isCurrentStage ? "currentStage" : ""}>
      <div className="conditions-container">
        <p>
          {solvent ? <span>{solvent}</span> : null}
          {(solvent && temp) || (solvent && time) ? <span>,</span> : null}
          {temp ? <span>{temp} &#8451;</span> : null}
          {temp && time ? <span>,</span> : null}
          {time ? <span> {time}</span> : null}
        </p>
        <SingleArrow />
        {_yield ? <p>{_yield} %</p> : null}
        {methodic ? (
          <div className="methodic-container">
            <p className="methodic">{methodic}</p>
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
    </Container>
  );
};

export default SynthesisSchemeStage;
