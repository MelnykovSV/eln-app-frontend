import styled from "@emotion/styled";

const Container = styled.div`
  .schemes-preview-container {
    display: grid;
    grid-template-columns: repeat(5, 202px);
    position: relative;
    /* justify-content: center;
    align-items: center; */
    /* background-color: yellow; */
    gap: 15px;

    & > div {
      /* left: 50%; */
      /* margin: 0 auto;
      position: relative;
      overflow: hidden;
      transition: transform 1s linear;
      background-color: white; */
      /* transform: scaleX(0.5); */
      /* div {
        transform: scaleX(1);
      } */

      &:hover {
        /* animation: growAnimation 1s ease-out forwards; */
        /* width: 400px; */

        /* z-index: 10; */

        /* margin: 0 auto; */
        /* left: 50%; */
        /* transform: translateX(-50%) scaleX(2); */
        /* transform: scaleX(1); */
      }
    }
  }
`;

export default Container;
