import Container from "./RegisterPage.styled";
import { RegistrationForm } from "../../modules";
import { useEffect } from "react";
import { useAppSelector } from "../../redux/hooks";
import { getAuthError } from "../../redux/auth/authSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    <Container className="container">
      <RegistrationForm />
    </Container>
  );
};

export default RegisterPage;
