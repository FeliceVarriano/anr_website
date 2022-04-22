import React from "react";
import { Button } from "../Button";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  Column3,
  TextWrapper,
  ImgWrap,
  Img,
  TopLine,
  Heading,
  Subtitle,
  Subtitle2,
  Subtitle3,
  Subtitle4,
  Subtitle5,
  Subtitle6,
  Subtitle7,
} from "./InfoElements";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  img,
  alt,
  description,
  description2,
  description3,
  description4,
  description5,
  description6,
  description7,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine lightText={lightText}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <Subtitle2 darkText={darkText}>{description2}</Subtitle2>
                <Subtitle3 darkText={darkText}>{description3}</Subtitle3>
                <Subtitle4 darkText={darkText}>{description4}</Subtitle4>
                <Subtitle5 darkText={darkText}>{description5}</Subtitle5>
                <Subtitle6 darkText={darkText}>{description6}</Subtitle6>
                <Subtitle7 darkText={darkText}>{description7}</Subtitle7>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
