import styled from "@emotion/styled";

const Container = styled.form`
  width: 100%;
  padding: 10px 0;
  padding: 20px;
  .dropzone {
    background-color: wheat;
    border: solid 1px black;
    padding: 10px;
  }
  .spectr-label {
    margin-bottom: 15px;
    width: 100%;
  }
  .label-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  button {
    width: 100%;
  }
`;

export default Container;
