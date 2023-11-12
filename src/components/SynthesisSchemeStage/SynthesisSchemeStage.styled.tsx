import styled from "@emotion/styled";
import { IStyledProps } from "../../types/common";

export const Container = styled.div<IStyledProps>`
  display: flex;
  height: 170px;
  width: fit-content;
  cursor: pointer;
  transition: transform 0.3s linear;
  &:hover {
    transform: scale(1.02);
  }

  &.currentStage {
    .drawing-container {
      box-shadow: 0 0 5px 1px green;
    }
  }

  .conditions-container {
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .conditions-container-top,
    .conditions-container-bottom {
      height: 77px;
    }
    .conditions-container-top {
      display: flex;
      flex-direction: column;

      p {
        margin-top: auto;
      }
    }
    p {
      max-width: 200px;
      margin: 0;
      overflow-wrap: break-word;
      text-align: center;
      .span-temp,
      .span-time {
        white-space: nowrap;
      }
    }
    .methodic-container {
      position: relative;
      width: 95%;

      .methodic {
        padding: 10px;
        position: absolute;
        top: 10px;
        z-index: 1000;
        border-radius: 5px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        border: 1px solid ${({ theme }) => theme.palette.text.disabled};
        background-color: ${({ theme }) => theme.palette.background.secondary};
        opacity: 1;
        transition: transform 0.3s linear;
        transform: scaleY(0);
        transform-origin: top;
        max-height: 400px;
        overflow-x: hidden;
        overflow-y: auto;
        overflow-wrap: break-word;
        font-size: 14px;
        word-break: break-word;

        ::-webkit-scrollbar {
          width: 12px;
        }

        ::-webkit-scrollbar-track {
          background-color: ${({ theme }) => theme.palette.text.disabled};
          border-radius: 5px;
          padding: 5px;
        }

        ::-webkit-scrollbar-thumb {
          background-color: ${({ theme }) => theme.palette.primary.main};
          border: 3px solid ${({ theme }) => theme.palette.text.disabled};
          border-radius: 12px;
          width: 5px;
        }

        scrollbar-width: thin;
        scrollbar-color: ${({ theme }) => theme.palette.primary.main}
          ${({ theme }) => theme.palette.text.disabled};
      }
    }
  }
  .drawing-container {
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
