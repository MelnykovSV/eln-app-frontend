import styled from "@emotion/styled";
import { IStyledProps } from "../../types/common";

export const Container = styled.div<IStyledProps>`
  align-items: center;
  gap: 30px;
  padding-top: 20px;
  margin-bottom: 20px;

  @media screen and (min-width: 1280px) {
    display: flex;
  }
  .stage-scheme-container {
    display: flex;
  }
  .canvas-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 204px;

    background-color: ${({ theme }) => theme.palette.background.secondary};
    border: 2px solid ${({ theme }) => theme.palette.primary.main};
    border-radius: 15px;
    @media screen and (min-width: 768px) {
      width: 100%;
    }

    .arrow {
      width: 150px;
    }
  }

  .canvas-container-mobile {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 124px;
    background-color: ${({ theme }) => theme.palette.background.secondary};
    border: 2px solid ${({ theme }) => theme.palette.primary.main};
    border-radius: 15px;
    .arrow {
      width: 60px;
    }
  }

  .stage-wrapper {
  }
`;

export const StageWrapper = styled.div<IStyledProps>`
  width: 100%;
  padding: 20px;
  .stage-info-select-container {
    margin-bottom: 20px;
    #stage-info-select-label {
      background-color: ${({ theme }) => theme.palette.background.default};
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
      height: 50px;
    }
  }
`;
