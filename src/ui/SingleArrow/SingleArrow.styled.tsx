import styled from "@emotion/styled";
import { IStyledProps } from "../../types/common";

export const Container = styled.div<IStyledProps>`
  width: 185px;
  @media screen and (min-width: 768px) {
    width: 200px;
  }
  svg {
    aspect-ratio: 12 / 1;
    width: 175px;
    display: block;
    margin: 0 auto;

    @media screen and (min-width: 768px) {
      width: 185px;
    }
  }
`;
