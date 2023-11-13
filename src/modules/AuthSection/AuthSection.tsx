import * as S from "./AuthSection.styled";


const AuthSection = () => {
  return (
    <S.Container>
      <S.MainSectionContent className="container">
        <S.StyledMessage>
          <p>
            If you need an account with already prepared database, to test app's
            functionality, you may use following credentials:
          </p>
          <p>Email: test_user@gmail.com</p>
          <p>Password: Aa111111</p>
        </S.StyledMessage>
        <S.AuthLinkBlock>
          <S.AuthLink to="/login">Log in</S.AuthLink>
          <S.AuthLink to="/register">Sign up</S.AuthLink>
        </S.AuthLinkBlock>
      </S.MainSectionContent>
    </S.Container>
  );
};

export default AuthSection;
