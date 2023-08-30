import styled from "@emotion/styled";

const Container = styled.div`
  .utility-panel {
    padding: 20px;
    gap: 30px;
    @media screen and (min-width: 1280px) {
      display: flex;
      justify-content: center;
    }
    .select-container {
      border: 1px solid black;
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .sorting-container {
      border: 1px solid black;
      padding: 5px;
      padding-left: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      .radio-buttons-container {
      }
      .arrows-container {
        display: flex;
        flex-direction: column;
      }
    }
  }
  .schemes-preview-container {
    display: grid;

    position: relative;

    grid-template-columns: repeat(1, 202px);

    @media screen and (min-width: 768px) {
      grid-template-columns: repeat(3, 202px);
    }
    @media screen and (min-width: 1280px) {
      grid-template-columns: repeat(6, 202px);
    }

    justify-content: space-between;
    margin: 0 auto;
    gap: 5px;
  }
`;

export default Container;
