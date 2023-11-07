import styled from "@emotion/styled";
import { IStyledProps } from "../../types/common";

export const Container = styled.form<IStyledProps>`
  border: 3px solid ${(props) => props.theme.palette.primary.main};
  border-radius: 8px;
  padding: 14px;
  width: 100%;
  flex-direction: column;
  gap: 15px;
  display: flex;

  .scheme-form-first-block {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    gap: 15px;
    .scheme-form-first-block__inputs-container {
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 100%;
    }
    .scheme-form-first-block__canvas-container {
      position: relative;
      border: 2px solid ${(props) => props.theme.palette.primary.main};
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
  }
  .scheme-form-second-block {
    display: flex;
    gap: 15px;
    justify-content: space-between;
    align-items: center;
    .button-container {
      width: 100%;
      button {
        width: 100%;
      }
    }
  }


  .MuiSelect-select {
    display: flex;
    align-items: center;
  }
  .button-submit {
    height: 50px;
  }
`;


