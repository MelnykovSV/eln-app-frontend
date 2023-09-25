import styled from "@emotion/styled";

const Container = styled.li`
  padding: 10px 20px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  p {
    height: 70px;
    overflow: auto;
  }
  .spectr-button-container {
    display: flex;
    justify-content: space-between;
  }
`;

export default Container;
