import { Container } from "./DNALoaderSmall.styled";

const DNALoaderSmall = () => {
  return (
    <Container
      visible={true}
      height="30"
      ariaLabel="dna-loading"
      wrapperClass="dna-wrapper"
    />
  );
};

export default DNALoaderSmall;
