import React from 'react';
import styled from "styled-components"
<style>
  @import url('https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Dancing+Script:wght@500;700&family=Montserrat:wght@200;300;400&family=Poppins&family=Questrial&family=Quicksand:wght@300&family=Raleway:wght@100&family=Roboto:wght@300&family=Space+Grotesk&family=Suez+One&display=swap');
</style>

function WhatWeOffer() {
  return (
    <Wrapper>
      <TextWrapper>
        <Header>What We Offer</Header>
        <Text>I'm a paragraph.
          Click here to add your own text and edit me.
          It’s easy.
          Just click “Edit Text” or double click me to add your own content and make changes to the font.
        </Text>
      </TextWrapper>

      <CardsWrapper>
        <CardWrapper>
          <Image src='./img/card-1.png' />
          <CardHeader>Workflows That Work</CardHeader>
          <CardText>
            I'm a paragraph.
            Click here to add your own text and edit me.
            I’m a great place for you to tell a story and let your users know a little more about you.
          </CardText>
        </CardWrapper>

        <CardWrapper>
          <Image src='./img/card-2.png' />
          <CardHeader>All-In-One Solution</CardHeader>
          <CardText>
            I'm a paragraph.
            Click here to add your own text and edit me.
            I’m a great place for you to tell a story and let your users know a little more about you.
          </CardText>
        </CardWrapper>

        <CardWrapper>
          <Image src='./img/card-3.png' />
          <CardHeader>Comprehensive Customer Support</CardHeader>
          <CardText>
            I'm a paragraph.
            Click here to add your own text and edit me.
            I’m a great place for you to tell a story and let your users know a little more about you.
          </CardText>
        </CardWrapper>

        <CardWrapper>
          <Image src='./img/card-4.png' />
          <CardHeader>Smart Automation Tools</CardHeader>
          <CardText>
            I'm a paragraph.
            Click here to add your own text and edit me.
            I’m a great place for you to tell a story and let your users know a little more about you.
          </CardText>
        </CardWrapper>
      </CardsWrapper>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  margin-top: 150px;

  @media screen and (max-width: 500px) {
    margin-top: 100px;
  }
`

export const TextWrapper = styled.div`
  margin-left: 100px;

  @media screen and (max-width: 1050px) {
    margin-left: 0px;
  }
`

export const Header = styled.p`
  color: #000000;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 38px;

  @media screen and (max-width: 1050px) {
    text-align: center;
  }

  @media screen and (max-width: 500px) {
    font-size: 24px;
  }
`

export const Text = styled.p`
  color: #000000;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 16px;
  width: 492px;
  line-height: 25px;

  @media screen and (max-width: 1050px) {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (max-width: 768px) {
    width: 75%;
    font-size: 14px;
  }
`

export const CardsWrapper = styled.div`
  display: flex;
  width: 980px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;

  @media screen and (max-width: 1050px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
  }
`

export const CardWrapper = styled.div`
  width: 100%;

  @media screen and (max-width: 1050px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    margin-bottom: 40px;
  }
`

export const Image = styled.img`
  border-radius: 10px;
  border: 2px solid #000000;
`

export const CardHeader = styled.p`
  color: #000000;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 22px;
  width: 180px;

  @media screen and (max-width: 1050px) {
    width: 100%;
    text-align: center;
  }
`

export const CardText = styled.p`
  color: #000000;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 16px;
  line-height: 25px;
  width: 230px;

  @media screen and (max-width: 1050px) {
    width: 70%;
    text-align: center;
  }
`

export default WhatWeOffer;