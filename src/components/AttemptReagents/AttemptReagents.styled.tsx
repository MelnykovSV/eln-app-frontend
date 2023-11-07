import styled from "@emotion/styled";
import { IStyledProps } from "../../types/common";

export const Container = styled.div<IStyledProps>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media screen and (min-width: 1280px) {
    width: 75%;
  }
`;
