import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  height: 170px;
  width: fit-content;
  cursor: pointer;

  &.currentStage {
    .drawing-container {
      /* border: solid 1px green; */
      box-shadow: 0 0 5px 1px green;
    }
  }

  .conditions-container {
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
      max-width: 200px;
      margin: 0;
    }
    .methodic-container {
      position: relative;
      width: 95%;
      /* padding-top: 50px; */

      .methodic {
        padding: 10px;
        position: absolute;
        top: 10px;
        z-index: 10;

        /* border: 1px blue solid; */
        /* border-radius: 10px; */
        background-color: #e5dcca;
        transition: transform 0.3s linear;
        transform: scaleY(0);
        transform-origin: top;
        max-height: 400px;
        overflow-x: hidden;
        overflow-y: auto;
        overflow-wrap: break-word;
        font-size: 14px;
      }
    }
  }
  .drawing-container {
    /* width: 120px; */
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    .calculated-mass {
      position: absolute;
      left: 50%;
      bottom: 10px;
      transform: translateX(-50%);
      width: 100%;
      text-align: center;
    }
  }

  &:hover {
    .conditions-container {
      p {
      }
      .methodic-container {
        .methodic {
          transform: scaleY(1);
        }
      }
    }
  }
`;

export default Container;
