import Container from "./RegistrationForm.styled";
import { Button, FormControlLabel, Checkbox } from "@mui/material";
import { useFormik } from "formik";
import FormTextInput from "../FormTextInput/FormTextInput";
import * as yup from "yup";
import { regexp } from "../../regexp";
import { useState } from "react";

const RegistrationForm = () => {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const checkboxHandler = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
  };

  const validationSchema = yup.object({
    name: yup
      .string()
      .min(3, "Name has to be at least 3 characters long")
      .max(30, "Name has to be maximum 30 characters long")
      .matches(regexp.name, "Name can contain only letters, numbers and spaces")
      .required("Name is required"),
    email: yup
      .string()
      .matches(regexp.email, "Enter a valid email")
      .required("Email is required"),
    password: yup
      .string()
      .matches(
        regexp.password,
        "Password should be of minimum 8 characters length and contain at least one capital letter, one regular letter and one number or special symbol"
      )
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords don't match")
      .required("Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Container>
      <a href="#">Already have an account? Sign in</a>
      <h1>Get started</h1>
      <form onSubmit={formik.handleSubmit}>
        <FormTextInput label="Name" name="name" formik={formik} />
        <FormTextInput label="Email" name="email" formik={formik} />
        <FormTextInput
          label="Password"
          name="password"
          type="password"
          formik={formik}
        />
        <FormTextInput
          label="Confirm password"
          name="confirmPassword"
          formik={formik}
          type="password"
        />

        <FormControlLabel
          control={<Checkbox />}
          onChange={checkboxHandler}
          checked={isCheckboxChecked}
          label={
            <p>
              I agree to <a href="#">Terms of Use</a> .
            </p>
          }
        />
        <Button type="submit" variant="contained" disabled={!isCheckboxChecked}>
          Create account
        </Button>
      </form>
    </Container>
  );
};

export default RegistrationForm;
