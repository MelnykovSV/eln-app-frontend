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
  }
`;

export default Container;
