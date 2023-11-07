import * as S from "./DoubleArrows.styled";
import { ReactComponent as LongArrowRight } from "./../../images/icons/Long_arrow1.svg";
import { IDoubleArrowsProps } from "../../types";

const DoubleArrows = ({ stagesNumber }: IDoubleArrowsProps) => {
  return (
    <S.Container className="arrows">
      <LongArrowRight className="first-arrow" style={{ width: 40 }} />
      <LongArrowRight className="second-arrow" style={{ width: 40 }} />
      <p> {stagesNumber} stages</p>
    </S.Container>
  );
};

export default DoubleArrows;
