import styled from "@emotion/styled";

const Container = styled.div`
  .header {
    .nav-link {
      display: block;
      padding: 6px 16px;
      text-decoration: none;
      border-radius: 5px;
      color: white;
      background-color: #42a5f5;
      font-weight: 700;
      transition: background-color 0.3s linear;

      &:hover {
        background-color: #1565c0;
      }
    }
    .icon-button {
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 1;
      text-transform: uppercase;
      color: white;
    }
  }
`;

export default Container;
