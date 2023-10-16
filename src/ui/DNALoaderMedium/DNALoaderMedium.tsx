import { Container } from "./DNALoaderMedium.styled";

const DNALoaderMedium = () => {
  return (
    <Container
      visible={true}
      height="100"
      ariaLabel="dna-loading"
      wrapperClass="dna-wrapper"
    />
  );
};

export default DNALoaderMedium;
