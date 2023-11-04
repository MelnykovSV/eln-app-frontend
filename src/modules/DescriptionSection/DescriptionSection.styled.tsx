import styled from "@emotion/styled";
import { IStyledProps } from "../../types/common";
// import { ReactComponent as TestIcon } from "./../../images/icons/Long_arrow.svg";

import TestIcon from "./../../images/icons/triangle.svg";

export const Container = styled.section<IStyledProps>`
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
  max-width: 375px;

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    max-width: 768px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 16px;
    padding-right: 16px;
    max-width: 1440px;
  }
`;

export const DescriptionContent = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 64px 20px;
  margin-top: 0;

  @media (min-width: 768px) {
    padding: 64px 32px;
  }
  @media (min-width: 1440px) {
    padding: 64px 128px;
  }
`;

export const DescriptionBlock = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 64px;
  @media (min-width: 1440px) {
    align-items: center;
    flex-direction: row;

    &:nth-of-type(2n) {
      flex-direction: row-reverse;
      margin-right: auto;
    }
  }
`;

export const DescriptionInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  @media screen and (min-width: 768px) {
    padding: 40px;
  }
`;

export const DescriptionNumber = styled.p`
  display: flex;
  font-size: 80px;
  font-weight: 700;
  line-height: 0.8;
  letter-spacing: -4px;
  color: #3e85f3;
  margin: 0;
`;

export const DescriptionNameAccent = styled.h2`
  margin-top: 20px;
  margin-bottom: 0;
  padding: 8px 18px;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.25;
  color: #3e85f3;
  text-transform: uppercase;
  border-radius: 44px;
  background-color: #dcebf7;

  @media (min-width: 768px) {
    line-height: 1.1;
    padding: 6px 18px;

    font-size: 40px;
  }
`;

export const DescriptionName = styled.h3`
  font-size: 32px;
  font-weight: 700;
  line-height: 1.25;
  color: #171820;
  text-transform: uppercase;
  margin-top: 8px;
  margin-bottom: 0;

  @media (min-width: 768px) {
    line-height: 1.1;
    font-size: 40px;
  }
`;

export const DescriptionText = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
  color: #111111;
  margin-bottom: 40px;
  margin-top: 14px;
  ul {
    list-style: none;
    padding-left: 20px;
    @media screen and (min-width: 768px) {
      padding-left: 40px;
    }
    li {
      position: relative;
      &:not(:last-of-type) {
        margin-bottom: 10px;
      }
      &:before {
        content: "";
        position: absolute;
        left: -20px;
        display: inline-block;
        width: 16px;
        height: 16px;
        margin-right: 8px;
        fill: blue;
        background-image: url(${TestIcon});
        background-size: contain;
        background-repeat: no-repeat;
        @media screen and (min-width: 768px) {
          left: -50px;
        }
      }
    }
  }
  @media (min-width: 768px) {
    margin-top: 24px;
  }
`;

export const DescritpionPictureContainer = styled.div`
  background-color: #dcebf7;
  border-radius: 100px;
  width: 100%;
  height: 457px;
  overflow: hidden;
  position: relative;

  .img-container {
    width: 110%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-25deg);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

    &.single-scheme-page {
      width: 80%;
      transform: translate(-50%, -100%) rotate(-25deg);
    }
    &.single-scheme-page-reagents {
      width: 80%;
      transform: translate(-50%, -10%) rotate(-25deg);
    }
    &.single-stage-page {
      width: 80%;
      transform: translate(-50%, -50%) rotate(-25deg);
    }
    img {
      width: 100%;
    }
  }

  @media (min-width: 768px) {
    width: 100%;
    height: 700px;
  }
  @media (min-width: 1440px) {
    width: 100%;
    height: 700px;
  }
`;

export const DescriptionImg = styled.img`
  width: 100%;
  height: 100%;
`;
