import Container from "./LoginPage.styled";
import { LoginForm } from "../../modules";
import { useAppSelector } from "../../redux/hooks";
import { getAuthError } from "../../redux/auth/authSlice";
import { toast } from "react-toastify";
import { useEffect } from "react";

const LoginPage = () => {
  const authError = useAppSelector(getAuthError);
  useEffect(() => {
    if (authError.message === "Email or password invalid") {
      toast.error(authError.message);
    }
  }, [authError]);

  return (
    <Container className="container">
      <LoginForm />
    </Container>
  );
};

export default LoginPage;
