import styled from "@emotion/styled";

const Container = styled.div`
  width: 200px;
  height: 300px;
  border: solid red 1px;
  padding: 10px;
  .canvas-container {
    border: solid green 1px;
    width: fit-content;
    margin: 0 auto;
    margin-bottom: 20px;
    display: flex;

    
  }
  .scheme-info {
    border: solid blue 1px;
    width: 150px;
    margin: 0 auto;
    dl {
      div {
        display: flex;
        justify-content: space-between;
      }
    }
  }
`;

export default Container;
