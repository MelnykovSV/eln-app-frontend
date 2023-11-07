import styled from "@emotion/styled";
import { IStyledProps } from "../../types/common";

export const Container = styled.div<IStyledProps>`
  background-color: ${({ theme }) => theme.palette.background.default};
  height: calc(100vh - 85px);
  .utility-panel {
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 15px;
    @media screen and (min-width: 768px) {
      padding: 20px;
    }
    @media screen and (min-width: 1280px) {
      flex-direction: row-reverse;
    }

    .utility-panel-outer-block {
      display: flex;
      flex-direction: column;
      gap: 15px;
      @media screen and (min-width: 768px) {
        flex-direction: row;
      }
      .utility-panel-block {
        display: flex;
        gap: 15px;
        flex-direction: column;

        @media screen and (min-width: 768px) {
          flex-direction: row;
          align-items: center;
          button {
            height: 56px;
            width: 200px;
          }
        }
        input {
          width: 100%;
        }
      }
    }

    @media screen and (min-width: 1280px) {
      display: flex;
      justify-content: center;
    }
    .select-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .sorting-container {
      border: 1px solid ${({ theme }) => theme.palette.text.secondary};
      border-radius: 8px;
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
  .scheme-previews-container {
    .pagination {
      margin-top: 20px;
      margin-bottom: 20px;
      ul {
        justify-content: center;
      }
    }
  }
`;
