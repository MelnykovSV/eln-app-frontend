import * as S from "./FormTextInput.styled";
import { IFormTextInputProps } from "../../types";
import { InputAdornment, IconButton } from "@mui/material";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const FormTextInput = ({ label, name, formik, type }: IFormTextInputProps) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };
  if (type === "password") {
    return (
      <S.Container
        label={label}
        name={name}
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
        error={formik.touched[name] && Boolean(formik.errors[name])}
        helperText={formik.touched[name] && formik.errors[name]}
        sx={{ minHeight: 80 }}
        type={visible ? "text" : "password"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={toggleVisibility}>
                {visible ? <AiFillEye /> : <AiFillEyeInvisible />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    );
  }
  return (
    <S.Container
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
