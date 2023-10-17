import styled from "@emotion/styled";

const Container = styled.form`
  width: 100%;
  padding: 10px 0;
  padding: 20px;
  .dropzone {
    background-color: wheat;
    border: solid 1px black;
    padding: 10px;
    cursor: pointer;
    p {
      margin: 0;
    }
    .dropzone-error {
      margin-top: 10px;
      color: red;
    }
  }
  .spectr-label {
    margin-bottom: 5px;
    width: 100%;
  }
  .spectr-label-error {
    margin: 0;
    color: red;
    height: 19px;
    margin-bottom: 5px;
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
