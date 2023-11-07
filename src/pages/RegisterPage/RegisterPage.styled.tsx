import styled from "@emotion/styled";
import BgImage from "./../../images/bg-image-2.jpg";
import { IStyledProps } from "../../types/common";

export const Container = styled.div<IStyledProps>`
  display: flex;
  flex-direction: column;
  height: min(calc(100vh - 85px), 1150px);
  @media screen and (min-width: 1280px) {
    flex-direction: row;
  }
`;

export const BGContainer = styled.div<IStyledProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
      0deg,
      rgba(33, 150, 243, 0.5),
      rgba(33, 150, 243, 0.5)
    ),
    url(${BgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  clip-path: polygon(0 0, 100% 0, 100% 87%, 0px 100%);

  @media screen and (min-width: 1280px) {
    clip-path: polygon(0 0, 95% 0, 100% 100%, 0 100%);
  }

  .content {
    width: min(400px, 100%);
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 30px;

    @media screen and (min-width: 1280px) {
      padding-bottom: 0;
    }
    .logo_text-container {
      .logo_text-line {
        color: ${({ theme }) => theme.palette.primary.contrastText};
        font-size: 20px;
        @media screen and (min-width: 1280px) {
          font-size: 30px;
        }
        .logo_capital-letter {
          font-size: 20px;

          @media screen and (min-width: 1280px) {
            font-size: 30px;
          }
        }
      }
    }

    .logo_icon {
      width: 100px;

      @media screen and (min-width: 1280px) {
        width: 150px;
      }
    }

    .slogan {
      font-size: 26px;
      width: 100%;
      color: ${({ theme }) => theme.palette.primary.contrastText};
    }
  }
`;
export const FormContainer = styled.div<IStyledProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
