import styled from "@emotion/styled";
import { IStyledProps } from "../../types/common";

export const Container = styled.div<IStyledProps>`
  width: 100%;
  border: 2px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 8px;
  margin-bottom: 20px;
  overflow: hidden;

  @media screen and (min-width: 1280px) {
    width: 35%;
    margin-bottom: 0;
  }
`;

