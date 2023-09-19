import Container from "./StagePage.styled";
import { Stage } from "../../modules";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import {
  getCurrentStage,
  getCurrentScheme,
  initialUpdateCurrentStage,
} from "../../redux/schemes/schemesSlice";
import { useEffect, useState } from "react";
import { IAttempt } from "../../types/redux";
import { useParams } from "react-router";
import { getSchemeAndStage } from "../../redux/schemes/operations";
// product,
// _yield,
// solvent,
// methodic,
// temp,
// time,
// _id,
// startingMaterial,
// testSuccess,
// scalingSuccess,
// attempts,
const StagePage = () => {
  const dispatch = useAppDispatch();
  const currentStage = useAppSelector(getCurrentStage);
  const [product, setProduct] = useState(currentStage.product);
  const [_yield, set_yield] = useState(currentStage._yield);
  const [solvent, setSolvent] = useState(currentStage.solvent);
  const [methodic, setMethodic] = useState(currentStage.methodic);
  const [temp, setTemp] = useState(currentStage.temp);
  const [time, setTime] = useState(currentStage.time);
  const [_id, set_id] = useState(currentStage._id);
  const [startingMaterial, setStartingMaterial] = useState(
    currentStage.startingMaterial
  );
  const [testSuccess, setTestSuccess] = useState(currentStage.testSuccess);
  const [scalingSuccess, setScalingSuccess] = useState(
    currentStage.scalingSuccess
  );
  const [attempts, setAttempts] = useState(currentStage.attempts);

  // const productChangeHandler = (value: string | null) => {
  //   setProduct(value);
  // };

  const _yieldChangeHandler = (value: number | null) => {
    set_yield(value);
  };

  const solventChangeHandler = (value: string | null) => {
    setSolvent(value);
  };
  const methodicChangeHandler = (value: string | null) => {
    setMethodic(value);
  };
  const tempChangeHandler = (value: number | null) => {
    setTemp(value);
  };
  const timeChangeHandler = (value: string | null) => {
    setTime(value);
  };
  const testSuccessChangeHandler = (value: boolean | null) => {
    setTestSuccess(value);
  };
  const scalingSuccessChangeHandler = (value: boolean | null) => {
    setScalingSuccess(value);
  };
  const attemptsChangeHandler = (value: IAttempt[]) => {
    setAttempts(value);
  };
  const currentScheme = useAppSelector(getCurrentScheme);

  const { schemeId, stageId } = useParams() as any;
  useEffect(() => {
    if (currentScheme._id === schemeId) {
      // const stage = currentScheme.stages.find((item) => item._id === stageId);
      dispatch(initialUpdateCurrentStage(stageId));
    } else {
      dispatch(getSchemeAndStage({ schemeId, stageId }));
    }
  }, []);

  return (
    <Container>
      <Stage />
    </Container>
  );
};

export default StagePage;
