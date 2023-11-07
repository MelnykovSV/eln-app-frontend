import styled from "@emotion/styled";
import { IStyledProps } from "../../types/common";

export const Container = styled.div<IStyledProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 10px 20px;
  border: 1px solid black;
  border-radius: 8px;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: calc((100% - 20px) / 2);
  }

  .reagent-input {
    width: 100%;
  }
`;

