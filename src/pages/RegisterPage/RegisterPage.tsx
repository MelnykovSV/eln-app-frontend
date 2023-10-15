import Container from "./RegisterPage.styled";
import { RegistrationForm } from "../../modules";
import { useEffect } from "react";
import { useAppSelector } from "../../redux/hooks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterPage = () => {
  return (
    <Container className="container">
      <RegistrationForm />
      <ToastContainer />
    </Container>
  );
};

export default RegisterPage;
