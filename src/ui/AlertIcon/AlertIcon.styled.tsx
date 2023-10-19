import { LuAlertCircle } from "react-icons/lu";
import styled from "@emotion/styled";
import { IStyledProps } from "../../types/common";

const StyledAlertIcon = styled(LuAlertCircle)<IStyledProps>`
  stroke: ${({ theme }) => theme.palette.error.main};
  margin-left: 20px;
  width: 24px;
  height: 24px;
`;

export default StyledAlertIcon;
