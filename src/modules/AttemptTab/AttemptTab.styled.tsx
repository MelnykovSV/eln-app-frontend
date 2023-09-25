import styled from "@emotion/styled";

const Container = styled.div`
  padding: 20px;
  border: 1px solid black;
  .attempt-second-block {
    display: flex;
    align-items: start;
    flex-direction: column;
    @media screen and (min-width: 1280px) {
      flex-direction: row;
      gap: 20px;
    }
  }
`;

export default Container;
