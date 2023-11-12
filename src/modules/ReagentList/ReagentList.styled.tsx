import styled from "@emotion/styled";
import { IStyledProps } from "../../types/common";

export const Container = styled.ul<IStyledProps>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0;
  padding-bottom: 20px;
  height: 100%;
  overflow-y: auto;
`;
