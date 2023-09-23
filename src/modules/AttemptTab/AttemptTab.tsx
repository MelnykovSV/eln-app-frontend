import Container from "./AttemptTab.styled";
import {
  AttemptConditions,
  AttemptReagents,
  AttemptSpectra,
} from "../../components/";
import { useAppSelector } from "../../redux/hooks";
import { getCurrentStageAttempts } from "../../redux/schemes/schemesSlice";
import { modalOpenType } from "../../types";

interface IAttemptProps {
  attemptNumber: number;
}

const AttemptTab = ({ attemptNumber }: IAttemptProps) => {
  const attempts = useAppSelector(getCurrentStageAttempts);

  return (
    <Container>
      <h1>Attempt {attemptNumber}</h1>
      <AttemptConditions attemptNumber={attemptNumber} />
      <div className="attempt-second-block">
        <AttemptReagents attemptNumber={attemptNumber} />
        <AttemptSpectra attemptNumber={attemptNumber} />
      </div>
    </Container>
  );
};

export default AttemptTab;
