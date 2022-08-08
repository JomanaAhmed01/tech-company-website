import React from 'react';
import styled from "styled-components"
<style>
  @import url('https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Dancing+Script:wght@500;700&family=Montserrat:wght@200;300;400&family=Poppins&family=Questrial&family=Quicksand:wght@300&family=Raleway:wght@100&family=Roboto:wght@300&family=Space+Grotesk&family=Suez+One&display=swap');
</style>

function CheckoutPremium() {
  return (
    <Wrapper>
      <Header>Checkout</Header>
      <InfoWrapper>
        <TextWrapper>
          <SignUp>1 Sign up</SignUp>
          <TextPurchase>To purchase this plan and use its benefits in the future, log in to your account or sign up.</TextPurchase>
          <ButtonsWrapper>
            <SignUpButton>Sign Up</SignUpButton>
            <LogInButton>Log In</LogInButton>
          </ButtonsWrapper>
          <PaymentWrapper>
            <Payment>2 Payment</Payment>
          </PaymentWrapper>
        </TextWrapper>

        <CardWrapper>
          <CardTextWrapper>
            <CardHeader>Order Summary</CardHeader>
            <CardRow>
              <CardText>Plan</CardText>
              <CardText>$50</CardText>
            </CardRow>

            <CardRow>
              <CardText>Duration</CardText>
              <CardText>12 months</CardText>
            </CardRow>

            <TotalCardRow>
              <CardTotal>Total</CardTotal>
              <CardTotal>$50</CardTotal>
            </TotalCardRow>

            <CardRow>
              <CardText>You will be charged monthly for 12 months.</CardText>
            </CardRow>
          </CardTextWrapper>

        </CardWrapper>
      </InfoWrapper>

      <ImagesWrapper>
        <ImageOne src='./img/plant-4.svg' />
        <ImageTwo src='./img/plant-5.svg' />
      </ImagesWrapper>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  background-color: #FFFFFF;
  width: 980px;
  height: auto;
  margin-top: -150px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 1024px) {
    height: auto;
    width: 90%;
  }
`

export const Header = styled.p`
  color: #868686;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 32px;
  width: 900px;
  border-bottom: 1px solid #868686;
  padding-bottom: 30px;
  padding-top: 50px;
  margin-left: 50px;

  @media screen and (max-width: 1024px) {
    width: 80%;
  }

  @media screen and (max-width: 720px) {
    width: 80%;
  }
`

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: 30px;

  @media screen and (max-width: 1024px) {
    flex-direction: column-reverse;
    align-items: center;
    margin-left: 20px;
    margin-right: 20px;
  }
`

export const TextWrapper = styled.div`
  
`

export const SignUp = styled.p`
  color: #000000;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 24px;
`

export const TextPurchase = styled.p`
  color: #242424;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 16px;
  line-height: 20px;
  width: 520px;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`

export const PaymentWrapper = styled.div`
  border-top: 1px solid #969696;
  margin-top: 20px;
`

export const Payment = styled.p`
  color: #969696;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 24px;
`

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 525px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`

export const SignUpButton = styled.p`
  color: #FFFFFF;
  background-color: #000000;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 16px;
  width: 250px;
  padding-top: 15px;
  padding-bottom: 15px;
  text-align: center;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`

export const LogInButton = styled.p`
  color: #000000;
  background-color: #FFFFFF;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 16px;
  width: 250px;
  padding-top: 15px;
  padding-bottom: 15px;
  text-align: center;
  border: 1px solid #000000;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`

export const CardWrapper = styled.div`
  border: 1px solid #868686;
  width: 340px;
  height: auto;
  padding-bottom: 20px;

  @media screen and (max-width: 1024px) {
    border: none;
    width: 90%;
  }
`

export const CardTextWrapper = styled.div`
  width: 278px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`

export const CardHeader = styled.p`
  color: #000000;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 24px;
`

export const CardRow = styled.div`
  display: flex;
  justify-content: space-between;
`

export const TotalCardRow = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #868686;
`

export const CardText = styled.p`
  color: #000000;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 16px;
`

export const CardTotal = styled.p`
  color: #000000;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 24px;
  width: 278px;
  margin-left: auto;
  margin-right: auto;
  
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`

export const ImagesWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 980px;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`

export const ImageOne = styled.img`
  width: 153px;
  height: 117px;
  /* margin-bottom: -20px; */
`

export const ImageTwo = styled.img`
  width: 127px;
  height: 134px;
`

export default CheckoutPremium;