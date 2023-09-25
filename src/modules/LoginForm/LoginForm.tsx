import Container from "./LoginForm.styled";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import { FormTextInput } from "../../components";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { signIn } from "../../redux/auth/operations";

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const validationSchema = yup.object({
    email: yup.string().required("Email is required"),
    password: yup.string().required("Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(
        signIn({
          email: values.email,
          password: values.password,
        })
      );
    },
  });
  return (
    <Container>
      <Link to="/register">Don't have an account? Sign up</Link>
      <h1>Login form</h1>
      <form onSubmit={formik.handleSubmit}>
        <FormTextInput label="Email" name="email" formik={formik} />
        <FormTextInput
          label="Password"
          name="password"
          type="password"
          formik={formik}
        />
        <Button type="submit" variant="contained">
          Login
        </Button>
      </form>
    </Container>
  );
};

export default LoginForm;
