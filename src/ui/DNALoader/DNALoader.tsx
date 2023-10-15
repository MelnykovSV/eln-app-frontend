import { Dna } from "react-loader-spinner";
import { Container } from "./DNALoader.styled";

const DNALoader = () => {
  return (
    <Container>
      <Dna
        visible={true}
        height="300"
        width="300"
        ariaLabel="dna-loading"
        wrapperClass="dna-wrapper"
      />
    </Container>
  );
};

export default DNALoader;
