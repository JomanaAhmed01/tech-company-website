import React from 'react';
import styled from "styled-components"
import { useHistory } from 'react-router-dom'
<style>
  @import url('https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Dancing+Script:wght@500;700&family=Montserrat:wght@200;300;400&family=Poppins&family=Questrial&family=Quicksand:wght@300&family=Raleway:wght@100&family=Roboto:wght@300&family=Space+Grotesk&family=Suez+One&display=swap');
</style>

function MaximizeYourProductivity() {

  const history = useHistory()

  return (
    <Wrapper>
      <TextWrapper>
        <Header>Get Ready to Maximize Your Productivity With Our Workflow Solutions</Header>
        <Button onClick={() => history.push('/PricingPlansPageCompound')}>Get Started</Button>
      </TextWrapper>

      <ImageWrapper>
        <Image src='./img/productivity.svg' />
      </ImageWrapper>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  margin-top: 370px;
`

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  padding-left: 5px;
  text-align: center;
  width: 112px;
  background-color: #000000;
  border-radius: 5px;
  margin-bottom: 100px;
  transition: 0.3s ease-in-out;
  border: 2px solid #000000;

  :hover {
    background-color: #FFBF23;
    color: #000000;
    cursor: pointer;
  }
`

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -100px;

  @media screen and (max-width: 600px) {
    margin-top: -40px;
  }
`

export const Image = styled.img`
  width: 60%;
`

export default MaximizeYourProductivity;