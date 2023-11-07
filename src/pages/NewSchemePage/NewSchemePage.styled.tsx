import styled from "@emotion/styled";
import { IStyledProps } from "../../types/common";

export const Container = styled.div<IStyledProps>`
  background-color: ${({ theme }) => theme.palette.background.default};
  .container {
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 1280px) {
      flex-direction: row;
    }
  }

  .new-scheme-from-container {
    padding-top: 20px;
    padding-bottom: 20px;
    @media screen and (min-width: 1280px) {
      width: 600px;
    }
  }
  .utility-panel {
    .toggle-schem-preview {
      display: block;

      @media screen and (min-width: 1280px) {
        display: none;
      }
    }
  }

  .new-scheme-content {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    @media screen and (min-width: 1280px) {
      flex-direction: row;
      align-items: stretch;
      justify-content: center;
    }
    .scheme-preview-container {
      width: 100%;
      padding: 20px;
    }

    .slide {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: ${({ theme }) => theme.palette.primary.contrastText};
      display: block;
      z-index: 10;

      @media screen and (min-width: 1280px) {
        display: none;
      }
    }
    .scheme-preview-container {
      display: none;

      @media screen and (min-width: 1280px) {
        display: block;
        overflow-y: auto;
        & > div {
          min-height: 100%;
        }
      }
    }
  }
`;
