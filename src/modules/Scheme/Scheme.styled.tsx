import styled from "@emotion/styled";
import { IStyledProps } from "../../types/common";

export const Container = styled.div<IStyledProps>`
  border: 3px solid ${(props) => props.theme.palette.primary.main};
  border-radius: 8px;
  height: 100%;
  overflow-y: auto;

  & > div {
    max-width: 1500px;
    display: flex;
    flex-wrap: wrap;
    border-radius: 15px;

    @media screen and (min-width: 768px) {
      padding: 10px;
    }

    .starting-material-canvas-container {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 170px;
      p {
        position: absolute;
        left: 50%;
        bottom: 10px;
        transform: translateX(-50%);
        width: 100%;
        text-align: center;
      }
    }
  }
`;
