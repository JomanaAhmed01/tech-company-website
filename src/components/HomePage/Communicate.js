import React from 'react';
import styled from "styled-components"
<style>
  @import url('https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Dancing+Script:wght@500;700&family=Montserrat:wght@200;300;400&family=Poppins&family=Questrial&family=Quicksand:wght@300&family=Raleway:wght@100&family=Roboto:wght@300&family=Space+Grotesk&family=Suez+One&display=swap');
</style>

function Communicate() {
  return (
    <Wrapper>
      <TextWrapper>
        <Header>Communicate. Collaborate. Create.</Header>
        <Text>WeDu provides an effective and powerful way to manage your projects</Text>
        <Button>Get Started</Button>

        <IconsWrapper>
          <IconTextWrapper>
            <Icon src='./img/speed.svg' />
            <IconText>Speed & Security</IconText>
          </IconTextWrapper>

          <IconTextWrapper>
            <Icon src='./img/flexbility.svg' />
            <IconText>Flexibility & Scalability</IconText>
          </IconTextWrapper>

          <IconTextWrapper>
            <Icon src='./img/collaboration.svg' />
            <IconText>Better Collaboration</IconText>
          </IconTextWrapper>
        </IconsWrapper>
      </TextWrapper>

      <ImageWrapper>
        <Image src='./img/communicate.svg' />
      </ImageWrapper>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 130px;
  background-image: url('./img/bg.png');
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (max-width: 1024px) {
    flex-direction: column-reverse;
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
  font-size: 50px;
  width: 478px;

  @media screen and (max-width: 768px) {
    font-size: 29px;
    width: 280px;
  }
`

export const Text = styled.p`
  color: #000000;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 20px;
  width: 380px;
  line-height: 30px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    width: 280px;
  }
`

export const Button = styled.p`
  color: #FFFFFF;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 16px;
  font-weight: bold;
  padding-bottom: 10px;
  padding-top: 10px;
  padding-right: 5px;
  text-align: center;
  width: 112px;
  background-color: #000000;
  border-radius: 5px;
  margin-top: 50px;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`

export const IconsWrapper = styled.div`
  display: flex;
  margin-top: 60px;

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
    width: 100%;
  }
`

export default Communicate;