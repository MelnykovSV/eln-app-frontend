import styled from "@emotion/styled";

const Container = styled.form`
  border: 1px solid black;
  padding: 15px;
  width: 100%;
  flex-direction: column;
  gap: 15px;
  display: flex;

  .scheme-form-first-block {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    gap: 15px;
    .scheme-form-first-block__inputs-container {
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 100%;
    }
    .scheme-form-first-block__canvas-container {
      position: relative;
      border: 1px solid black;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
  }
  .scheme-form-second-block {
    display: flex;
    gap: 15px;
    justify-content: space-between;
    align-items: center;
    .button-container {
      width: 100%;
      button {
        width: 100%;
      }
    }
  }
  @media screen and (min-width: 1280px) {
    width: 600px;
  }
`;

export default Container;
