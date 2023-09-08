import styled from "@emotion/styled";

const Container = styled.div`
  border: 1px solid black;
  padding: 15px;
  .new-stage-tab-first-block {
    display: flex;
    gap: 15px;
    margin-bottom: 15px;

    .new-stage-tab-first-block__inputs {
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 100%;
    }
    .new-stage-tab-first-block__canvas-container {
      border: 1px solid black;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .new-stage-tab-second-block {
    display: flex;
    gap: 15px;
    margin-bottom: 15px;
    .input {
      width: 50%;
    }
  }
  .input {
    width: 100%;
  }
`;

export default Container;
