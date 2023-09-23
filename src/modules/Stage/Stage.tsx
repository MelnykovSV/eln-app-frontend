import Container from "./Stage.styled";
import { StageInfo } from "../../components";
import { AttemptTab } from "../";
import { useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import { privateApi } from "../../api";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import {
  getCurrentStage,
  temporalSaveStageData,
} from "../../redux/schemes/schemesSlice";
import { modalOpenType } from "../../types";
import { saveCurrentStageData } from "../../redux/schemes/operations";


const Stage = () => {
  const dispatch = useAppDispatch();
  const [attemptNumber, setAttemptNumber] = useState(1);
  const handleAttemptNumberChange = (event: SelectChangeEvent) => {
    setAttemptNumber(Number(event.target.value));
  };
  const currentStage = useAppSelector(getCurrentStage);

  const getLastAttempt = () => {
    setAttemptNumber(Number(currentStage.attempts.length + 1));
  };

  const stageId = currentStage._id;

  const saveHandler = async () => {
    // const response = await privateApi.post(
    //   `/api/schemes/updateStage/${stageId}`,
    //   currentStage
    // );
    // dispatch(temporalSaveStageData());
    dispatch(saveCurrentStageData(currentStage));
  };

  return (
    <Container>
      <StageInfo
        attemptNumber={attemptNumber}
        handleAttemptNumberChange={handleAttemptNumberChange}
        getLastAttempt={getLastAttempt}
        saveHandler={saveHandler}
      />
      <AttemptTab attemptNumber={attemptNumber} />

    </Container>
  );
};

export default Stage;
