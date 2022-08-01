import React from 'react';
import styled from "styled-components"
<style>
    @import url('https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Dancing+Script:wght@500;700&family=Montserrat:wght@200;300;400&family=Poppins&family=Questrial&family=Quicksand:wght@300&family=Raleway:wght@100&family=Roboto:wght@300&family=Space+Grotesk&family=Suez+One&display=swap');
</style>

function MaximizeYourProductivity() {
    return (
        <Wrapper>
            <TextWrapper>
              <Header>Get Ready to Maximize Your Productivity With Our Workflow Solutions</Header>
              <Button>Get Started</Button>
            </TextWrapper>

            <ImageWrapper>
                <Image src='./img/productivity.svg' />
            </ImageWrapper>
        </Wrapper>
    );
}

export const Wrapper = styled.div`
  margin-top: 170px;
`

export const TextWrapper = styled.div`
  
`

export const Header = styled.p`
  color: #000000;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 38px;
  width: 780px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 840px) {
    font-size: 24px;
    width: 70%;
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
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #000000;
  transition: 0.3s ease-in-out;

  :hover {
    background-color: #996E00;
    color: #000000;
    cursor: pointer;
  }
`

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -100px;
`

export const Image = styled.img`
  width: 60%;
`

export default MaximizeYourProductivity;