import * as S from "./SingleArrow.styled";
import { ReactComponent as LongArrowRight } from "./../../images/icons/Long_arrow.svg";

const SingleArrow = () => {
  return (
    <S.Container>
      <LongArrowRight className="arrow" />
    </S.Container>
  );
};

export default SingleArrow;
