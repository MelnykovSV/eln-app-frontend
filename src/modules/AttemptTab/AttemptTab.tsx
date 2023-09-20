import Container from "./AttemptTab.styled";
import {
  AttemptConditions,
  AttemptReagents,
  AttemptSpectra,
} from "../../components/";
import { useAppSelector } from "../../redux/hooks";
import { getCurrentStageAttempts } from "../../redux/schemes/schemesSlice";

interface IAttemptProps {
  attemptNumber: number;
}

const AttemptTab = ({ attemptNumber }: IAttemptProps) => {
  const attempts = useAppSelector(getCurrentStageAttempts);

  return (
    <Container>
      <h1>Attempt #{attemptNumber}</h1>
      <p>{JSON.stringify(attempts[attemptNumber - 1])}</p>
      <AttemptConditions attemptNumber={attemptNumber} />
      <AttemptReagents attemptNumber={attemptNumber} />
      <AttemptSpectra attemptNumber={attemptNumber} />
    </Container>
  );
};

export default AttemptTab;
