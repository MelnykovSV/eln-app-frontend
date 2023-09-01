import Container from "./SingleArrow.styled";
import { ReactComponent as LongArrowRight } from "./../../images/icons/Long_arrow.svg";

const SingleArrow = () => {
  return (
    <Container>
      <LongArrowRight className="arrow" />
    </Container>
  );
};

export default SingleArrow;
