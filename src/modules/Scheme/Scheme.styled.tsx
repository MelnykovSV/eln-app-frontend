import styled from "@emotion/styled";

const Container = styled.div`
  max-width: 1500px;
  border: 1px solid red;
  display: flex;
  flex-wrap: wrap;

  .starting-material-canvas-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 170px;
    p {
      position: absolute;
      left: 50%;
      bottom: 10px;
      transform: translateX(-50%);
      width: 100%;
      text-align: center;
    }
  }

 
`;

export default Container;
