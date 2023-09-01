import styled from "@emotion/styled";

const Container = styled.div`
  background-color: white;
  width: 50px;
  display: flex;
  flex-direction: column;
  height: 110px;
  justify-content: center;
  align-items: center;
  .first-arrow {
    padding-right: 10px;
  }
  .second-arrow {
    padding-left: 10px;
  }
  p {
    margin: 0;
  }
`;

export default Container;
