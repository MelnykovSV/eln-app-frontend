import Container from "./AttemptSpectra.styled";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { SpectraForm, SpectraList } from "../";

interface IAttemptSpectraProps {
  attemptNumber: number;
}

const AttemptSpectra = ({ attemptNumber }: IAttemptSpectraProps) => {
  return (
    <Container>
      <SpectraForm attemptNumber={attemptNumber} />
      <SpectraList attemptNumber={attemptNumber} />
    </Container>
  );
};

export default AttemptSpectra;
