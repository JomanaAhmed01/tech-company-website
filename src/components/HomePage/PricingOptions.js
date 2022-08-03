import React from 'react';
import styled from "styled-components"
import { CheckCircleFill } from '@styled-icons/bootstrap/CheckCircleFill'
<style>
  @import url('https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Dancing+Script:wght@500;700&family=Montserrat:wght@200;300;400&family=Poppins&family=Questrial&family=Quicksand:wght@300&family=Raleway:wght@100&family=Roboto:wght@300&family=Space+Grotesk&family=Suez+One&display=swap');
</style>

function PricingOptions() {
  return (
    <Wrapper>
      <TextWrapper>
        <Header>Explore Our Pricing Options</Header>
        <Text>I'm a paragraph.
          Click here to add your own text and edit me.
          It’s easy.
          Just click “Edit Text” or double click me to add your own content and make changes to the font.
          I’m a great place for you to tell a story and let your users know a little more about you.
        </Text>
        <Button>See More</Button>
      </TextWrapper>

      <PricingWrapper>
        <BestValue>Best Value</BestValue>

        <PricingTextWrapper>
          <Premium>Premium</Premium>
          <Dollars>$50</Dollars>
          <Timing>Every month</Timing>
          <Membership>Use this area to describe one of your memberships.</Membership>
          <ValidFor>Valid for 12 months</ValidFor>
          <GetStartedButton>Get Started</GetStartedButton>
        </PricingTextWrapper>


        <IamABenefitWrapper>
          <IconTextWrapper>
            <Icon />
            <IconText>I'm a benefit</IconText>
          </IconTextWrapper>

          <IconTextWrapper>
            <Icon />
            <IconText>I'm a benefit</IconText>
          </IconTextWrapper>

          <IconTextWrapper>
            <Icon />
            <IconText>I'm a benefit</IconText>
          </IconTextWrapper>

          <IconTextWrapper>
            <Icon />
            <IconText>I'm a benefit</IconText>
          </IconTextWrapper>
        </IamABenefitWrapper>
      </PricingWrapper>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 130px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 560px) {
    margin-top: 70px;
  }
`

export const TextWrapper = styled.div`
  
`

export const Header = styled.p`
  color: #000000;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 50px;
  width: 340px;

  @media screen and (max-width: 1024px) {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (max-width: 560px) {
    font-size: 24px;
  }
`

export const Text = styled.p`
  color: #000000;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 20px;
  width: 510px;
  line-height: 30px;

  @media screen and (max-width: 1024px) {
    text-align: center;
  }

  @media screen and (max-width: 560px) {
    font-size: 15px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
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
  border: 1px solid #000000;
  transition: 0.3s ease-in-out;

  :hover {
    background-color: #996E00;
    color: #000000;
    cursor: pointer;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
  }

  @media screen and (max-width: 560px) {
    font-size: 15px;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
  }
`

export const PricingWrapper = styled.div`
  width: 450px;
  height: 350px;
  background-color: #000000;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border: 2px solid #000000;
  padding-bottom: 30px;
  margin-left: 30px;

  @media screen and (max-width: 1024px) {
    margin-top: 100px;
    margin-left: 0px;
  }

  @media screen and (max-width: 560px) {
    width: 90%;
  }
`

export const BestValue = styled.p`
  background-color: #FFBF23;
  border: 2px solid #000000;
  font-size: 14px;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: bold;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 93px;
  text-align: center;
  margin-top: -20px;
  margin-left: auto;
  margin-right: auto;
`

export const PricingTextWrapper = styled.div`
  
`

export const Premium = styled.p`
  color: #FFFFFF;
  font-size: 28px;
  font-family: 'Space Grotesk', sans-serif;
  padding-left: 30px;
`

export const Dollars = styled.p`
  color: #FFFFFF;
  font-size: 60px;
  font-family: 'Space Grotesk', sans-serif;
  margin-top: -20px;
  padding-left: 30px;
`

export const Timing = styled.p`
  color: #FFFFFF;
  font-size: 12px;
  font-family: 'Space Grotesk', sans-serif;
  margin-top: -40px;
  padding-left: 30px;
`

export const Membership = styled.p`
  color: #FFFFFF;
  font-size: 14px;
  font-family: 'Space Grotesk', sans-serif;
  margin-bottom: 40px;
  padding-left: 30px;
`

export const ValidFor = styled.p`
  color: #FFFFFF;
  font-size: 12px;
  font-family: 'Space Grotesk', sans-serif;
  padding-left: 30px;
`

export const GetStartedButton = styled.p`
  width: 296px;
  color: #000000;
  font-weight: bold;
  font-size: 16px;
  font-family: 'Space Grotesk', sans-serif;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #FFFFFF;
  text-align: center;
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
`

export const IamABenefitWrapper = styled.div`
  background-color: #FFD7EF;
  border: 2px solid #000000;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  width: 420px;
  height: 209px;
  margin-left: -2px;
  padding-left: 30px;
  padding-top: 20px;

  @media screen and (max-width: 560px) {
    width: 94%;
  }

  @media screen and (max-width: 460px) {
    width: 93%;
  }
`

export const IconTextWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Icon = styled(CheckCircleFill)`
  width: 14px;
  height: 14px;
  padding-right: 10px;
`

export const IconText = styled.p`
  color: #000000;
  font-size: 14px;
  font-family: 'Space Grotesk', sans-serif;
  letter-spacing: 0.05em;
`

export default PricingOptions;