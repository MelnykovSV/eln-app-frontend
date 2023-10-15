import { Dna } from "react-loader-spinner";
import { Container } from "./DNALoaderSmall.styled";

const DNALoaderSmall = () => {
  return (
    <Container>
      <Dna
        visible={true}
        height="30"
        ariaLabel="dna-loading"
        wrapperClass="dna-wrapper"
      />
    </Container>
  );
};

export default DNALoaderSmall;
