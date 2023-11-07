import * as S from "./AttemptSpectra.styled";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { SpectraForm, SpectraList } from "../";

interface IAttemptSpectraProps {
  attemptNumber: number;
}

const AttemptSpectra = ({ attemptNumber }: IAttemptSpectraProps) => {
  return (
    <S.Container>
      <SpectraForm attemptNumber={attemptNumber} />
      <SpectraList attemptNumber={attemptNumber} />
    </S.Container>
  );
};

export default AttemptSpectra;
