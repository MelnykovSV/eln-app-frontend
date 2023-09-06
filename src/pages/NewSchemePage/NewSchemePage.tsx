import Container from "./NewSchemePage.styled";
import { NewSchemeForm } from "../../modules";
// import { useFormik } from "formik";
// import * as yup from "yup";
// import dayjs from "dayjs";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { LocalizationProvider } from "@mui/x-date-pickers";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { useState } from "react";
// import { FormTextInput } from "../../components";
// import { TextField } from "@mui/material";

const NewSchemePage = () => {
  return (
    <Container>
      New Scheme page
      <NewSchemeForm />
    </Container>
  );
};

export default NewSchemePage;
