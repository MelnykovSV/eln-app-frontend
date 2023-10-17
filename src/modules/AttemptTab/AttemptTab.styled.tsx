import styled from "@emotion/styled";
import { IStyledProps } from "../../types/common";
const Container = styled.div<IStyledProps>`
  padding: 20px;
  border: 2px solid ${({ theme }) => theme.palette.primary.main};
  background-color: ${({ theme }) => theme.palette.background.paper};
  border-radius: 15px;

  .attempt-second-block {
    display: flex;
    align-items: start;
    flex-direction: column;
    @media screen and (min-width: 1280px) {
      flex-direction: row;
      gap: 20px;
    }
  }
`;

export default Container;
