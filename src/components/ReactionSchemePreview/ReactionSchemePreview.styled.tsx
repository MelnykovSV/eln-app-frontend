import styled from "@emotion/styled";

const Container = styled.div`
  cursor: pointer;
  width: 200px;
  /* height: 250px; */
  background-color: white;
  /* overflow: hidden; */
  border: solid red 1px;
  padding: 10px 5px;
  /* clip-path: inset(0 25%); */
  transition: width 0.3s linear, box-shadow 0.3s linear;
  font-size: 11px;

  position: relative;
  /* left: 50%;
  transform: translateX(-50%); */
  &:nth-child(5n + 2),
  &:nth-child(5n + 3),
  &:nth-child(5n + 4) {
    left: 50%;
    transform: translateX(-50%);
    /* background-color: red; */
  }

  &:nth-child(5n + 5) {
    left: 100%;
    transform: translateX(-100%);
    /* background-color: red; */
  }

  &:hover {
    z-index: 20 !important;
    width: 300px;

    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    .canvas-container {
      width: 284px;
      .arrows {
        transform: translateX(0);
      }
      div:last-child {
        transform: translateX(0);
      }
    }

    .scheme-info {
      width: 284px;
      .scheme-info__additional {
        transform: translateX(100%);
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
    width: 140px;
    div {
      background-color: white;
    }
    .arrows {
      transition: transform 0.3s linear;
      transform: translateX(-50px);
    }
    div:last-child {
      /* display: none; */
      transition: transform 0.3s linear;
      transform: translateX(-140px);
    }
  }
  .scheme-info {
    border: solid blue 1px;
    width: 142px;
    transition: width 0.3s linear;
    margin: 0 auto;
    display: flex;
    /* padding: 5px; */
    flex-shrink: 0;
    position: relative;
    dl {
      background-color: white;
      margin: 0;

      div {
        display: flex;
        justify-content: space-between;

        dt,
        dd {
          margin: 0;
        }
      }
    }
    .scheme-info__main {
      width: 140px;
      transform: translateX(0);
      padding: 10px;

      /* position: absolute; */
    }
    .scheme-info__additional {
      width: 140px;
      transition: transform 0.3s linear;
      transform: translateX(0);
      position: absolute;
      padding: 10px;
    }
  }

  &.active {
    z-index: 50;
  }
`;

export default Container;
