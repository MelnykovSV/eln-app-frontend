import styled from "@emotion/styled";
import { IStyledProps } from "../../types/common";

const Container = styled.div<IStyledProps>`
  .loader-container {
    height: 300px;
  }

  .no-schemes-message {
    font-size: 30px;
    text-align: center;
  }
`;

export default Container;
