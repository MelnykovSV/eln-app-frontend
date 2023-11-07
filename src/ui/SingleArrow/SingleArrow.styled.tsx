import styled from "@emotion/styled";
import { IStyledProps } from "../../types/common";

export const Container = styled.div<IStyledProps>`
  width: 200px;
  svg {
    aspect-ratio: 12 / 1;
    width: 185px;
    display: block;
    margin: 0 auto;
  }
`;
