import styled from "@emotion/styled";
import { IStyledProps } from "../../types/common";
import { FaCheck } from "react-icons/fa";

export const StyledIcon = styled(FaCheck)<IStyledProps>`
  fill: ${({ theme }) => theme.palette.success.main};
  margin-left: 20px;
`;
