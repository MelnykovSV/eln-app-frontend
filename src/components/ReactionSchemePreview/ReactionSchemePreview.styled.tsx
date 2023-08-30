import styled from "@emotion/styled";

const Container = styled.div`
  cursor: pointer;
  width: 300px;
  background-color: white;
  border: solid
    ${(props) => {
      console.log(props);
      return "red";
    }}
    1px;
  padding: 10px 5px;
  transition: width 0.3s linear, box-shadow 0.3s linear;
  font-size: 11px;
  position: relative;

  .canvas-container {
    border: solid black 1px;
    margin: 0 auto;
    margin-bottom: 20px;
    display: flex;
    transition: width 0.3s linear;
    width: 284px;
    div {
      background-color: white;
    }
    .arrows {
      transform: translateX(0);
    }
    div:last-child {
      transform: translateX(0);
    }
  }
  .scheme-info {
    border: solid blue 1px;
    width: 284px;
    transition: width 0.3s linear;
    margin: 0 auto;
    display: flex;
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
    }
    .scheme-info__additional {
      width: 140px;
      transition: transform 0.3s linear;
      transform: translateX(100%);
      position: absolute;
      padding: 10px;
    }
  }

  @media screen and (min-width: 768px) {
    cursor: pointer;
    width: 200px;
    background-color: white;
    border: solid red 1px;
    padding: 10px 5px;
    transition: width 0.3s linear, box-shadow 0.3s linear;
    font-size: 11px;
    position: relative;
    &:nth-of-type(3n + 2) {
      left: 50%;
      transform: translateX(-50%);
    }

    &:nth-of-type(3n + 3) {
      left: 100%;
      transform: translateX(-100%);
    }
    .canvas-container {
      border: solid black 1px;
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
        transition: transform 0.3s linear;
        transform: translateX(-140px);
      }
    }
    .scheme-info {
      border: solid black 1px;
      width: 142px;
      transition: width 0.3s linear;
      margin: 0 auto;
      display: flex;
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
      }
      .scheme-info__additional {
        width: 140px;
        transition: transform 0.3s linear;
        transform: translateX(0);
        position: absolute;
        padding: 10px;
      }
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
  }
  @media screen and (min-width: 1280px) {
    &:nth-of-type(6n + 2),
    &:nth-of-type(6n + 3),
    &:nth-of-type(6n + 4),
    &:nth-of-type(6n + 5) {
      left: 50%;
      transform: translateX(-50%);
    }

    &:nth-of-type(6n + 6) {
      left: 100%;
      transform: translateX(-100%);
    }
  }

  &.active {
    z-index: 50;
  }
`;

export default Container;
