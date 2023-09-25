import styled from "@emotion/styled";

const Container = styled.div`
  align-items: center;
  gap: 30px;
  padding-top: 20px;

  @media screen and (min-width: 1280px) {
    display: flex;
  }
  .canvas-container {
    display: flex;
    align-items: center;
    justify-content: center;
    .arrow {
      width: 150px;
    }

  }
  .canvas-container-mobile {
    display: flex;
    align-items: center;
    justify-content: center;
    .arrow {
      width: 60px;
    }

  }

  .stage-wrapper {
    width: 100%;
    padding: 20px;
    .stage-info-select-container {
      margin-bottom: 20px;
      #stage-info-select-label {
        background-color: white;
        padding-left: 5px;
        padding-right: 10px;
      }
    }

    .stage-info-button-container {
      display: flex;
      gap: 30px;
      button {
        width: 100%;
        padding: 10px;
        font-size: 13px;
        font-weight: 700;
      }
    }
  }

  
`;

export default Container;
