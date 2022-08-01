import React from 'react';
import styled from "styled-components"
<style>
  @import url('https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Dancing+Script:wght@500;700&family=Montserrat:wght@200;300;400&family=Poppins&family=Questrial&family=Quicksand:wght@300&family=Raleway:wght@100&family=Roboto:wght@300&family=Space+Grotesk&family=Suez+One&display=swap');
</style>

function BuiltForCreatives() {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src='./img/contact.svg' />
      </ImageWrapper>

      <TextWrapper>
        <Header>Built for Creatives, by Creatives</Header>
        <Text>I'm a paragraph.
          Click here to add your own text and edit me.
          It’s easy.
          Just click “Edit Text” or double click me to add your own content and make changes to the font.
          I’m a great place for you to tell a story and let your users know a little more about you.
        </Text>

        <IconsWrapper>
          <IconTextWrapper>
            <Icon src='./img/all-in-one.svg' />
            <IconText>All-In-One Toolkit</IconText>
          </IconTextWrapper>

          <IconTextWrapper>
            <Icon src='./img/file-sharing.svg' />
            <IconText>Integrated File Sharing</IconText>
          </IconTextWrapper>

          <IconTextWrapper>
            <Icon src='./img/design-freedom.svg' />
            <IconText>Total Design Freedom</IconText>
          </IconTextWrapper>
        </IconsWrapper>
      </TextWrapper>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 130px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`

export const TextWrapper = styled.div`
  @media screen and (max-width: 1024px) {
    margin-left: auto;
    margin-right: auto;
  }
`

export const Header = styled.p`
  color: #000000;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 38px;
  width: 387px;

  @media screen and (max-width: 768px) {
    font-size: 29px;
    width: 280px;
  }
`

export const Text = styled.p`
  color: #000000;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 16px;
  width: 402px;
  line-height: 30px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    width: 280px;
  }
`

export const IconsWrapper = styled.div`
  display: flex;
  margin-top: 30px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const IconTextWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 150px;

  @media screen and (max-width: 768px) {
    width: 300px;
  }
`

export const Icon = styled.img`
  width: 32px;
  height: 32px;

  @media screen and (max-width: 768px) {
    padding-right: 30px;
  }
`

export const IconText = styled.p`
  color: #000000;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 14px;
  width: 90px;

  @media screen and (max-width: 768px) {
    width: 400px;
  }
`

export const ImageWrapper = styled.div`
  
`

export const Image = styled.img`
  width: 563px;
  height: 482px;

  @media screen and (max-width: 1130px) {
    width: 90%;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`

export default BuiltForCreatives;