import styled from "@emotion/styled";
import { IStyledProps } from "../../types/common";

export const Container = styled.li<IStyledProps>`
  padding: 10px 20px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  @media screen and (max-width: 768px) {
    padding: 10px 10px;
  }
  p {
    height: 70px;
    overflow: auto;
    overflow-wrap: break-word;
  }
  .spectr-button-container {
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
      .MuiButton-contained {
        font-size: 11px;
        min-width: 50px;
      }
    }
  }
`;
