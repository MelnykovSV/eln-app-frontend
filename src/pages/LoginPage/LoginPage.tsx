import * as S from "./LoginPage.styled";
import { LoginForm } from "../../modules";
import { useAppSelector } from "../../redux/hooks";
import { getAuthError } from "../../redux/auth/authSlice";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { Logo } from "../../ui";

const LoginPage = () => {
  const authError = useAppSelector(getAuthError);
  useEffect(() => {
    if (authError.message === "Email or password invalid") {
      toast.error(authError.message);
    }
    if (authError.message === "Email is not verified") {
      toast.error(authError.message);
    }
  }, [authError]);

  return (
    <S.Container>
      <S.BGContainer>
        <div className="content">
          <Logo />
          <p className="slogan">
            The smart way to keep your experiment records
          </p>
        </div>
      </S.BGContainer>
      <S.FormContainer>
        <LoginForm />
      </S.FormContainer>
    </S.Container>
  );
};

export default LoginPage;
