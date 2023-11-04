import styled from "@emotion/styled";

const Container = styled.div`
  padding: 20px;
  max-width: 500px;
  width: 100%;
  @media screen and (min-width: 1280px) {
    width: 500px;
  }
  .MuiFormControlLabel-root {
    display: flex;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    button {
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export default Container;
