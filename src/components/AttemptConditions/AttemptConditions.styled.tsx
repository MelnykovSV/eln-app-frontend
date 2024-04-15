import styled from "@emotion/styled";
import { IStyledProps } from "../../types/common";

export const Container = styled.div<IStyledProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
  margin-bottom: 20px;



  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    .input {
      width: calc((100% - 20px) / 2);
    }
    .input.input--big {
      width: 100%;
    }
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: start;
    .input {
      width: calc((100% - 60px) / 4);
    }
    .input.input--big {
      width: calc((100% - 20px) / 2);
    }
  }

  .attempt-status-radio-group {
    display: flex;
    flex-direction: row;
    gap: 30px;
  }
`;
