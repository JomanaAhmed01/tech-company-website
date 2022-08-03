import React from 'react';
import styled from "styled-components"
<style>
  @import url('https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Dancing+Script:wght@500;700&family=Montserrat:wght@200;300;400&family=Poppins&family=Questrial&family=Quicksand:wght@300&family=Raleway:wght@100&family=Roboto:wght@300&family=Space+Grotesk&family=Suez+One&display=swap');
</style>

function IndustryLeaders() {
  return (
    <Wrapper>
      <TextWrapper>
        <Header>Trusted Among Industry Leaders</Header>
        <Text>I'm a paragraph.
          Click here to add your own text and edit me.
          It’s easy.
          Just click “Edit Text” or double click me to add your own content and make changes to the font.
        </Text>
      </TextWrapper>

      <LogosWrapper>
        <FirstLogoRow>
          <FirstLogo src='./img/meta-definer.png' />
          <Logo src='./img/delta-tech.png' />
          <Logo src='./img/tech-med.png' />
          <Logo src='./img/power-core.png' />
        </FirstLogoRow>

        <SecondLogoRow>
          <Logo src='./img/strongest-link.png' />
          <Logo src='./img/cog-industry.png' />
          <Logo src='./img/a-t-motion.png' />
          <Logo src='./img/bond.png' />
        </SecondLogoRow>
      </LogosWrapper>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  background-color: #FFD7EF;
  height: auto;
  margin-top: 100px;
  padding-top: 50px;
  padding-bottom: 50px;
`

export const TextWrapper = styled.div`
  margin-left: 150px;
  margin-bottom: 70px;

  @media screen and (max-width: 1024px) {
    margin-left: 0px;
  }
`

export const Header = styled.p`
  color: #000000;
  font-size: 38px;
  font-family: 'Space Grotesk', sans-serif;

  @media screen and (max-width: 1024px) {
    text-align: center;
    width: 100%;
  }

  @media screen and (max-width: 470px) {
    font-size: 24px;
  }
`

export const Text = styled.p`
  color: #000000;
  font-size: 16px;
  font-family: 'Space Grotesk', sans-serif;
  line-height: 30px;
  width: 448px;

  @media screen and (max-width: 1024px) {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    width: 70%;
  }

  @media screen and (max-width: 470px) {
    font-size: 15px;
  }
`

export const LogosWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    flex-direction: row;
    width: 100%;
  }
`

export const FirstLogoRow = styled.div`
  display: flex;
  justify-content: space-around;
  width: 960px;
  margin-bottom: 50px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 0px;
  }
`

export const SecondLogoRow = styled.div`
  display: flex;
  justify-content: space-around;
  width: 960px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const FirstLogo = styled.img`
  width: 126px;
  height: 126px;

  @media screen and (max-width: 470px) {
    width: 90px;
    height: 90px;
  }
`

export const Logo = styled.img`
  width: 120px;
  height: 120px;

  @media screen and (max-width: 470px) {
    width: 80px;
    height: 80px;
  }
`

export default IndustryLeaders;