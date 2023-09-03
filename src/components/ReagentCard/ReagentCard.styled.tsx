import styled from "@emotion/styled";

const Container = styled.div`
  padding: 10px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  .mol-info {
    display: flex;
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .mol-info__first {
      width: 500px;
    }

    .mol-info__second {
    }
  }
`;

export default Container;
