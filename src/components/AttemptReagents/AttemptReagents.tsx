import Container from "./AttemptReagents.styled";
import { useAppSelector } from "../../redux/hooks";
import { getCurrentStageAttempts } from "../../redux/schemes/schemesSlice";
import { SingleAttemptReagentTab } from "../";

interface IAttemptReagentsProps {
  attemptNumber: number;
}

const AttemptReagents = ({ attemptNumber }: IAttemptReagentsProps) => {
  const currentAttemptReagents = useAppSelector(getCurrentStageAttempts)[
    attemptNumber - 1
  ].reagents;

  return (
    <Container>
      {currentAttemptReagents.map((item) => (
        <SingleAttemptReagentTab
          reagentNumber={item.reagentNumber}
          smiles={item.smiles}
          equivalents={item.equivalents}
          molecularWeight={item.molecularWeight}
          mass={item.mass}
          attemptNumber={attemptNumber}
          key={item.reagentNumber}
        />
      ))}
    </Container>
  );
};

export default AttemptReagents;
