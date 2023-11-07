import styled from "@emotion/styled";
import { IStyledProps } from "../../types/common";

export const Container = styled.div<IStyledProps>`
  padding-top: 100px;
  padding-bottom: 100px;
  text-align: center;
  @media screen and (min-width: 768px) {
    padding-top: 200px;
    padding-bottom: 200px;
  }
`;
