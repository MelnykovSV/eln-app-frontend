import styled from "@emotion/styled";

const Container = styled.div`
  width: 400px;
  height: 300px;
  background-color: white;
  /* overflow: hidden; */
  border: solid red 1px;
  padding: 10px;
  clip-path: inset(0 25%);
  transition: all 0.3s linear;

  &:hover {
    z-index: 10;
    clip-path: inset(0 0%);
    .canvas-container {
      width: 300px;
      div:last-child {
        /* display: block; */
        transform: translateX(0);
      }
    }
  }

  .canvas-container {
    border: solid green 1px;
    /* width: fit-content; */
    margin: 0 auto;
    margin-bottom: 20px;
    display: flex;
    transition: width 0.3s linear;
    width: 150px;
    div {
      background-color: white;
    }
    div:last-child {
      /* display: none; */
      transition: transform 0.3s linear;
      transform: translateX(-100%);
    }
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
