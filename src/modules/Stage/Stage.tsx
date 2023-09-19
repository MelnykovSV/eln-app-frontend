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
    console.log(stageId);
    const response = await privateApi.post(
      `/api/schemes/updateStage/${stageId}`,
      currentStage
    );

    dispatch(temporalSaveStageData());

    console.log(response);
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

      {/* <Button type="button" onClick={saveHandler}>
        Save!
      </Button> */}
    </Container>
  );
};

export default Stage;
