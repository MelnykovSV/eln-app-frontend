import Container from "./Stage.styled";
import { StageInfo } from "../../components";
import { AttemptTab } from "../";
import { useState } from "react";
import { SelectChangeEvent } from "@mui/material";

// interface IStageProps {
//   // product: string | null;
//   // _yield: number | null;
//   // solvent: string | null;
//   // methodic: string | null;
//   // temp: number | null;
//   // time: string | null;
//   // _id: string | null;
//   // startingMaterial: string | null;
//   // testSuccess: boolean | null;
//   // scalingSuccess: boolean | null;
//   // attempts: IAttempt[];
//   // _yieldChangeHandler: (value: number | null) => void;
//   // solventChangeHandler: (value: string | null) => void;
//   // methodicChangeHandler: (value: string | null) => void;
//   // tempChangeHandler: (value: number | null) => void;
//   // timeChangeHandler: (value: string | null) => void;
//   // testSuccessChangeHandler: (value: boolean | null) => void;
//   // scalingSuccessChangeHandler: (value: boolean | null) => void;
//   // attemptsChangeHandler: (value: IAttempt[]) => void;
// }

const Stage = () => {
  // const attempts = useAppSelector(getCurrentStageAttempts);
  const [attemptNumber, setAttemptNumber] = useState(1);
  const handleAttemptNumberChange = (event: SelectChangeEvent) => {
    console.log(event.target.value);
    setAttemptNumber(Number(event.target.value));
  };

  return (
    <Container>
      <StageInfo
        attemptNumber={attemptNumber}
        handleAttemptNumberChange={handleAttemptNumberChange}
      />
      <AttemptTab attemptNumber={attemptNumber} />
    </Container>
  );
};

export default Stage;
