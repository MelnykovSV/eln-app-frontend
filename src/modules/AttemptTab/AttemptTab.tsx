import * as S from "./AttemptTab.styled";
import {
  AttemptConditions,
  AttemptReagents,
  AttemptSpectra,
} from "../../components/";

interface IAttemptProps {
  attemptNumber: number;
}

const AttemptTab = ({ attemptNumber }: IAttemptProps) => {
  return (
    <S.Container>
      <h1>Experiment {attemptNumber}</h1>
      <AttemptConditions attemptNumber={attemptNumber} />
      <div className="attempt-second-block">
        <AttemptReagents attemptNumber={attemptNumber} />
        <AttemptSpectra attemptNumber={attemptNumber} />
      </div>
    </S.Container>
  );
};

export default AttemptTab;
