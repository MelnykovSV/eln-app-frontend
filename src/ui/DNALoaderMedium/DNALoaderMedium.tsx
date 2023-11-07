import * as S from "./DNALoaderMedium.styled";

const DNALoaderMedium = () => {
  return (
    <S.Container
      visible={true}
      height="100"
      ariaLabel="dna-loading"
      wrapperClass="dna-wrapper"
    />
  );
};

export default DNALoaderMedium;
