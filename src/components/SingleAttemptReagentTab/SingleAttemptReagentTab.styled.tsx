import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 10px 20px;
  border: 1px solid black;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: calc((100% - 20px) / 2);
  }
  /* @media screen and (min-width: 768px) {
    width: calc((100% - 60px) / 4);
  } */

  .reagent-input {
    width: 100%;
  }
`;
export default Container;
