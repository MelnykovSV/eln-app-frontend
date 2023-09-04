import styled from "@emotion/styled";

const Container = styled.div`
  padding: 10px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
  .mol-info {
    display: flex;
    max-width: 100%;
    flex-direction: column;
    @media screen and (min-width: 1280px) {
      flex-direction: row;
    }
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .mol-info__first {
      @media screen and (min-width: 1280px) {
        width: 400px;
      }
    }

    .mol-info__second {
      overflow-wrap: break-word;
    }
  }
`;

export default Container;
