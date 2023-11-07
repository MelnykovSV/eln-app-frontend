import * as S from "./EmailVerificationPage.styled";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const EmailVerificationPage = () => {
  return (
    <S.Container className="container">
      <h1>Verification Email Sent</h1>

      <p>
        We have sent a verification email to the address you provided. Please
        check your inbox (and spam folder, just in case) for an email from us.
        Click the verification link in the email to complete the verification
        process.
      </p>

      <Button variant="contained" component={Link} to="/login">
        Login page
      </Button>
    </S.Container>
  );
};

export default EmailVerificationPage;
