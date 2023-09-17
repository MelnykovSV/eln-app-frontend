import Container from "./SynthesisSchemeStage.styled";
import { SingleMolCanvas } from "../../ui";
import { SingleArrow } from "../../ui";
import { ISynthesisSchemeStageProps } from "../../types";
import { smilesToMolWeight } from "../../helpers/chemistryHelpers";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../../redux/hooks";
import { updateCurrentStage } from "../../redux/schemes/schemesSlice";

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
}: ISynthesisSchemeStageProps) => {
  if (!product) {
    product = "";
  }
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const stageClickHandler = () => {
    console.log("clicked");
    // dispatch(getSingleScheme(schemePreviewData._id));
    if (_id) {
      dispatch(updateCurrentStage(_id));
      navigate(`/stage/`);
    }
  };
  return (
    <Container onClick={stageClickHandler}>
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
