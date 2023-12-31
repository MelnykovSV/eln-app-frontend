import styled from "@emotion/styled";
import { IStyledProps } from "../../types/common";

export const Container = styled.div<IStyledProps>`
  padding: 10px;
  display: flex;
  justify-content: center;
  gap: 5px;
  align-items: center;
  .logo_icon {
    width: 60px;
  }
  .logo_text-container {
    display: flex;
    flex-direction: column;
    gap: 5px; 
    font-weight: 700;
    font-size: 16px;
    .logo_text-line {
      .logo_capital-letter {
        font-size: 16px;
        color: #bcd30e;
      }
    }
  }
`;


