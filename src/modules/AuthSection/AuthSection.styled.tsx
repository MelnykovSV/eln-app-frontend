import styled from "@emotion/styled";
import { IStyledProps } from "../../types/common";
import { Link } from "react-router-dom";
import BgImage from "./../../images/bg-image.jpg";

export const Container = styled.section<IStyledProps>`
  /* height: 600px; */
  /* display: flex; */
  flex-direction: column;
  align-items: center;
`;

export const MainSectionContent = styled.div`
  /* background-color: #3e85f3; */
  background-image: linear-gradient(
      0deg,
      rgba(33, 150, 243, 0.4),
      rgba(33, 150, 243, 0.4)
    ),
    url(${BgImage});
  height: 100%;
  padding-top: 200px;
  padding-bottom: 200px;
`;

export const StyledMessage = styled.div`
  max-width: 600px;
  margin: 0 auto;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: calc(24 / 20);
  color: white;
  padding-left: 20px;
  padding-right: 20px;
  p {
    margin: 0;
    &:not(:last-of-type) {
      margin-bottom: 15px;
    }
  }
  margin-bottom: 30px;
`;

export const AuthLink = styled(Link)`
  color: #3e85f3;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: calc(18 / 14);
  letter-spacing: -0.28px;
  background-color: #fff;
  width: 121px;
  height: 49px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin-bottom: 16px;
  gap: 6px;
  text-decoration: none;
  box-shadow: rgba(136, 165, 191, 0.48) 4px 2px 16px 0px;
  transition: background-color 0.3s linear, color 0.3s linear;
  &:hover {
    background-color: #3e85f3;
    color: #fff;
  }

  @media screen and (min-width: 768px) {
    /* padding: 15px 32px; */
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const AuthLinkLogIn = styled(Link)`
  color: #3e85f3;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 128.571% */
  letter-spacing: -0.28px;
  background-color: #fff;
  /* padding: 14px 32px; */
  width: 121px;
  height: 49px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin-bottom: 16px;
  gap: 6px;
  text-decoration: none;
  box-shadow: rgba(136, 165, 191, 0.48) 4px 2px 16px 0px;

  @media screen and (min-width: 768px) {
    /* padding: 15px 32px; */
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const AuthLinkBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    align-items: baseline;
    gap: 24px;
  }

  @media screen and (min-width: 1280px) {
  }
`;
