import styled from "@emotion/styled";
import { IStyledProps } from "../../types/common";

export const Container = styled.form<IStyledProps>`
  width: 100%;
  padding: 10px 0;
  padding: 20px;
  border-bottom: solid 3px ${({ theme }) => theme.palette.primary.main};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;

  .dropzone {
    background-color: ${({ theme }) => theme.palette.info.light};
    color: white;
    padding: 10px;
    cursor: pointer;
    p {
      margin: 0;
    }
    .dropzone-error {
      margin-top: 10px;
      color: red;
    }
  }
  .files-list {
    list-style: none;
    padding: 0;
    margin: 0;
    margin-bottom: 10px;
    min-height: 37px;
  }
  .spectr-label {
    margin-bottom: 5px;
    width: 100%;
  }
  .spectr-label-error {
    margin: 0;
    color: red;
    height: 19px;
    margin-bottom: 5px;
  }
  .label-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  button {
    width: 100%;
  }
`;


