import styled from "@emotion/styled";
import { IStyledProps } from "../../types/common";

export const Container = styled.div<IStyledProps>`
  height: calc(100vh - 85px - 20px);
  .tab-panel {
    padding-top: 20px;
    height: calc(100vh - 85px - 48px - 20px);

    & > div {
      height: 100%;
      display: flex;
      flex-direction: column;
      .scheme-container {
        flex-grow: 1;
      }
    }
  }

  .radio-buttons-container {
    margin-bottom: 20px;
  }
`;
