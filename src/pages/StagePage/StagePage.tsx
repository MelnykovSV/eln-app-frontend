import Container from "./StagePage.styled";
import { Stage } from "../../modules";
import { useAppSelector } from "../../redux/hooks";
import { getCurrentStage } from "../../redux/schemes/schemesSlice";
import { useState } from "react";
import { IAttempt } from "../../types/redux";
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

  return (
    <Container>
      <Stage
      // product={product}
      // _yield={_yield}
      // solvent={solvent}
      // methodic={methodic}
      // temp={temp}
      // time={time}
      // _id={_id}
      // startingMaterial={startingMaterial}
      // testSuccess={testSuccess}
      // scalingSuccess={scalingSuccess}
      // attempts={attempts}
      // _yieldChangeHandler={_yieldChangeHandler}
      // solventChangeHandler={solventChangeHandler}
      // methodicChangeHandler={methodicChangeHandler}
      // tempChangeHandler={tempChangeHandler}
      // timeChangeHandler={timeChangeHandler}
      // testSuccessChangeHandler={testSuccessChangeHandler}
      // scalingSuccessChangeHandler={scalingSuccessChangeHandler}
      // attemptsChangeHandler={attemptsChangeHandler}
      />
    </Container>
  );
};

export default StagePage;
