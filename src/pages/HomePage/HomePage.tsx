import * as S from "./HomePage.styled";
import { AuthSection } from "../../modules";
import { DescriptionSection } from "../../modules";

const HomePage = () => {
  return (
    <S.Container>
      <AuthSection />
      <DescriptionSection />
    </S.Container>
  );
};

export default HomePage;
