import { Dna } from "react-loader-spinner";
import * as S from "./DNALoader.styled";

const DNALoader = () => {
  return (
    <S.Container className="loader">
      <Dna
        visible={true}
        height="300"
        width="300"
        ariaLabel="dna-loading"
        wrapperClass="dna-wrapper"
      />
    </S.Container>
  );
};

export default DNALoader;
