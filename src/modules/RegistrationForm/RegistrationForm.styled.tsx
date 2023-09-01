import styled from "@emotion/styled";
import { theme } from "../../theme/theme";

const Container = styled.div`
  /* background-color: ${theme.palette.primary.light}; */
  padding: 20px;

  max-width: 500px;
  .MuiFormControlLabel-root {
    display: flex;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export default Container;
