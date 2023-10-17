import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1280px) {
    flex-direction: row;
  }
  .utility-panel {
    .toggle-schem-preview {
      display: block;

      @media screen and (min-width: 1280px) {
        display: none;
      }
    }
  }

  .new-scheme-content {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    @media screen and (min-width: 1280px) {
      flex-direction: row;
      align-items: stretch;
      justify-content: center;
    }
    .scheme-preview-container {
      width: 100%;
      padding: 20px;
    }

    .slide {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: white;
      display: block;
      z-index: 10;

      @media screen and (min-width: 1280px) {
        display: none;
      }
    }
    .scheme-preview-container {
      display: none;

      @media screen and (min-width: 1280px) {
        display: block;
      }
    }
  }
`;

export default Container;
