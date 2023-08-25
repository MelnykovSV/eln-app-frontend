import Container from "./FormTextInput.styled";
import { IFormTextInputProps } from "../../types";

const FormTextInput = ({ label, name, formik, type }: IFormTextInputProps) => {
  if (type === "password") {
    return (
      <Container
        label={label}
        name={name}
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
        error={formik.touched[name] && Boolean(formik.errors[name])}
        helperText={formik.touched[name] && formik.errors[name]}
        sx={{ minHeight: 80 }}
        type="password"
      />
    );
  }
  return (
    <Container
      label={label}
      name={name}
      variant="outlined"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values[name]}
      error={formik.touched[name] && Boolean(formik.errors[name])}
      helperText={formik.touched[name] && formik.errors[name]}
      sx={{ minHeight: 80 }}
    />
  );
};

export default FormTextInput;
