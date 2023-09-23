import Container from "./SynthesisSchemeStage.styled";
import { SingleMolCanvas } from "../../ui";
import { SingleArrow } from "../../ui";
import { ISynthesisSchemeStageProps } from "../../types";
import { smilesToMolWeight } from "../../helpers/chemistryHelpers";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { updateCurrentStage } from "../../redux/schemes/schemesSlice";
import { getCurrentSchemeId } from "../../redux/schemes/schemesSlice";
import { useEffect } from "react";
import { getSingleScheme } from "../../redux/schemes/operations";

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
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentSchemeId = useAppSelector(getCurrentSchemeId);

  // useEffect(()=> {
  //   if (currentSchemeId) {
  //     console.log(currentSchemeId)
  //   }
  //   else {
  //     dispatch(getSingleScheme())
  //   }

  // }, [])

  const stageClickHandler = () => {
    if (_id) {
      // dispatch(updateCurrentStage(_id));
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
        <div className="methodic-container">
          <p className="methodic">{methodic}</p>
        </div>
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
