import styled from "@emotion/styled";
import { IStyledProps } from "../../types/common";
export const Container = styled.div<IStyledProps>`
  padding: 20px;
  border: 2px solid ${({ theme }) => theme.palette.primary.main};
  background-color: ${({ theme }) => theme.palette.background.paper};
  border-radius: 15px;

  .attempt-second-block {
    display: flex;
    align-items: start;
    flex-direction: column;
    gap: 20px;

    @media screen and (min-width: 1280px) {
      flex-direction: row;
      align-items: stretch;
    }
  }
`;


