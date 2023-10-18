import styled from "@emotion/styled";
import { IStyledProps } from "../../types/common";

const Container = styled.div<IStyledProps>`
  background-color: ${({ theme }) => theme.palette.background.default};
  padding-bottom: 20px;
`;

export default Container;
