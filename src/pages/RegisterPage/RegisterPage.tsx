import * as S from "./RegisterPage.styled";
import { RegistrationForm } from "../../modules";
import { useEffect } from "react";
import { useAppSelector } from "../../redux/hooks";
import { getAuthError } from "../../redux/auth/authSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Logo } from "../../ui";

const RegisterPage = () => {
  const authError = useAppSelector(getAuthError);

  useEffect(() => {
    if (
      authError.message === "Email already in use" ||
      authError.message === "User name already in use"
    ) {
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
        <RegistrationForm />
      </S.FormContainer>
    </S.Container>
  );
};

export default RegisterPage;
