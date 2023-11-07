import * as S from "./DNALoaderSmall.styled";

const DNALoaderSmall = () => {
  return (
    <S.Container
      visible={true}
      height="30"
      ariaLabel="dna-loading"
      wrapperClass="dna-wrapper"
    />
  );
};

export default DNALoaderSmall;
