import Container from "./DoubleArrows.styled";
import { ReactComponent as LongArrowRight } from "./../../images/icons/Long_arrow.svg";
import { IDoubleArrowsProps } from "../../types";

const DoubleArrows = ({ stagesNumber }: IDoubleArrowsProps) => {
  return (
    <Container className="arrows">
      <LongArrowRight className="first-arrow" style={{ width: 40 }} />
      <LongArrowRight className="second-arrow" style={{ width: 40 }} />
      <p> {stagesNumber} stages</p>
    </Container>
  );
};

export default DoubleArrows;
