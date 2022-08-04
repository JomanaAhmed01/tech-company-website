import React from 'react';
import styled from "styled-components"
import { CheckCircleFill } from '@styled-icons/bootstrap/CheckCircleFill'
<style>
  @import url('https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Dancing+Script:wght@500;700&family=Montserrat:wght@200;300;400&family=Poppins&family=Questrial&family=Quicksand:wght@300&family=Raleway:wght@100&family=Roboto:wght@300&family=Space+Grotesk&family=Suez+One&display=swap');
</style>

function PricingPlans() {
  return (
    <Wrapper>
      <PricingWrapperOne>
        <PricingTextWrapper>
          <PremiumFirst>Free</PremiumFirst>
          <DollarsFirst>$0</DollarsFirst>
          <MembershipFirst>Use this area to describe one of your memberships.</MembershipFirst>
          <ValidForFirst>Valid for 3 months</ValidForFirst>
          <GetStartedButtonFirst>Get Started</GetStartedButtonFirst>
        </PricingTextWrapper>

        <IamABenefitWrapperFirst>
          <IconTextWrapper>
            <Icon />
            <IconText>I'm a benefit</IconText>
          </IconTextWrapper>

          <IconTextWrapper>
            <Icon />
            <IconText>I'm a benefit</IconText>
          </IconTextWrapper>
        </IamABenefitWrapperFirst>
      </PricingWrapperOne>

      <PricingWrapperTwo>
        <PricingTextWrapper>
          <PremiumFirst>Standard</PremiumFirst>
          <DollarsFirst>$30</DollarsFirst>
          <TimingFirst>Every month</TimingFirst>
          <MembershipFirst>Use this area to describe one of your memberships.</MembershipFirst>
          <ValidForFirst>Valid for 6 months</ValidForFirst>
          <GetStartedButtonFirst>Get Started</GetStartedButtonFirst>
        </PricingTextWrapper>

        <IamABenefitWrapperSecond>
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
        </IamABenefitWrapperSecond>
      </PricingWrapperTwo>

      <PricingWrapperThree>
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
      </PricingWrapperThree>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 550px;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 560px) {
    margin-top: 70px;
  }
`

export const PricingWrapperOne = styled.div`
  width: 326px;
  height: 400px;
  background-color: rgb(255, 191, 35);
  border-radius: 10px;

  @media screen and (max-width: 1100px) {
    margin-bottom: 200px;
  }

  @media screen and (max-width: 560px) {
    width: 90%;
  }
`

export const PricingWrapperTwo = styled.div`
  width: 326px;
  height: 400px;
  background-color: rgb(255, 191, 35);
  border-radius: 10px;
  margin-left: 30px;

  @media screen and (max-width: 1100px) {
    margin-top: 100px;
    margin-left: 0px;
    margin-bottom: 200px;
  }

  @media screen and (max-width: 560px) {
    width: 90%;
  }
`

export const PricingWrapperThree = styled.div`
  width: 326px;
  height: 400px;
  background-color: #000000;
  border-radius: 10px;
  border: 2px solid #000000;
  margin-left: 30px;

  @media screen and (max-width: 1100px) {
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

export const PremiumFirst = styled.p`
  color: #000000;
  font-size: 28px;
  font-family: 'Space Grotesk', sans-serif;
  padding-left: 30px;
`

export const DollarsFirst = styled.p`
  color: #000000;
  font-size: 60px;
  font-family: 'Space Grotesk', sans-serif;
  margin-top: -20px;
  padding-left: 30px;
`

export const TimingFirst = styled.p`
  color: #000000;
  font-size: 12px;
  font-family: 'Space Grotesk', sans-serif;
  margin-top: -40px;
  padding-left: 30px;
`

export const MembershipFirst = styled.p`
  color: #000000;
  font-size: 14px;
  font-family: 'Space Grotesk', sans-serif;
  margin-bottom: 40px;
  padding-left: 30px;
`

export const ValidForFirst = styled.p`
  color: #000000;
  font-size: 12px;
  font-family: 'Space Grotesk', sans-serif;
  padding-left: 30px;
`

export const GetStartedButtonFirst = styled.p`
  width: 296px;
  color: #FFFFFF;
  background-color: #000000;
  font-weight: bold;
  font-size: 16px;
  font-family: 'Space Grotesk', sans-serif;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
`

export const IamABenefitWrapperFirst = styled.div`
  background-color: #FFD7EF;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  width: auto;
  height: 230px;
  margin-left: -2px;
  padding-left: 30px;
  padding-top: 20px;
  padding-bottom: 30px;

  @media screen and (max-width: 560px) {
    width: auto;
  }
`

export const IamABenefitWrapperSecond = styled.div`
  background-color: #FFD7EF;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  width: auto;
  height: 230px;
  margin-left: -2px;
  padding-left: 30px;
  padding-top: 20px;
  padding-bottom: 42px;

  @media screen and (max-width: 560px) {
    width: auto;
  }
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
  width: 296px;
  height: 244px;
  margin-left: -2px;
  padding-left: 30px;
  padding-top: 20px;

  @media screen and (max-width: 560px) {
    width: auto;
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

export default PricingPlans;