import styled from "@emotion/styled";
import { IStyledProps } from "../../types/common";

export const Container = styled.div<IStyledProps>`
  background-color: ${({ theme }) => theme.palette.primary.contrastText};
  width: 50px;
  display: flex;
  flex-direction: column;
  height: 110px;
  justify-content: center;
  align-items: center;

  .first-arrow {
    padding-right: 10px;
  }
  .second-arrow {
    padding-left: 10px;
  }
  p {
    margin: 0;
  }
`;
