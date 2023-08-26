import Container from "./LoginForm.styled";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import FormTextInput from "../FormTextInput/FormTextInput";
import * as yup from "yup";

const LoginForm = () => {
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
      console.log(values);
    },
  });
  return (
    <Container>
      <a href="#">Don't have an account? Sign up</a>
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
