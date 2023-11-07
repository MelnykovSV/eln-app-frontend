import styled from "@emotion/styled";
import { IStyledProps } from "../../types/common";

export const Container = styled.div<IStyledProps>`
  background-color: ${({ theme }) => theme.palette.background.default};
  padding-bottom: 20px;
`;


