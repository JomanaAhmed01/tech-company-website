import React from 'react';
import styled from "styled-components"
<style>
  @import url('https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Dancing+Script:wght@500;700&family=Montserrat:wght@200;300;400&family=Poppins&family=Questrial&family=Quicksand:wght@300&family=Raleway:wght@100&family=Roboto:wght@300&family=Space+Grotesk&family=Suez+One&display=swap');
</style>

function Footer() {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo src='./img/logo.svg' />
        <LogoTextWrapper>
          <WeDu>WeDu</WeDu>
          <Desc>Communicate. Collaborate. Create.</Desc>
        </LogoTextWrapper>
      </LogoWrapper>

      <ItemsWrapper>
        <FirstItems>
          <ItemsHeader>Contact</ItemsHeader>

          <MiniItemsWrappperOne>
            <Item>500 Terry Francois Street <br /> San Francisco, CA 94158</Item>
            <Item>Sales:<br /> info@mysite.com</Item>
            <Item>General Inquiries:<br /> 123-456-7890</Item>
            <Item>Costumer Care:<br /> info@mysite.com</Item>
          </MiniItemsWrappperOne>
        </FirstItems>

        <SecondItems>
          <ItemsHeader>Quick Links</ItemsHeader>

          <MiniItemsWrappperTwo>
            <Link href='#'>Terms & Conditions</Link>
            <Link href='#'>Privacy Policy</Link>
          </MiniItemsWrappperTwo>
        </SecondItems>

        <ThirdItems>
          <ItemsHeader>Follow</ItemsHeader>

          <MiniItemsWrappperThree>
            <Item>Sign up to get the latest news on our product.</Item>

            <EmailWrapper>
              <Label>Email *</Label>
              <EmailInputWrapper>
                <Input type='text' />
                <InputButton>Subscribe</InputButton>
              </EmailInputWrapper>
            </EmailWrapper>
          </MiniItemsWrappperThree>
        </ThirdItems>

        <FourthItems>
          <MiniItemsWrappperFour>
            <SocialMediaLink href='https://www.linkedin.com/company/wix-com'>LinkedIn</SocialMediaLink>
            <SocialMediaLink href='https://www.youtube.com/user/WIX'>Youtube</SocialMediaLink>
            <SocialMediaLink href='https://www.facebook.com/wix/'>Facebook</SocialMediaLink>
          </MiniItemsWrappperFour>
        </FourthItems>
      </ItemsWrapper>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  height: auto;
  width: 92.5%;
  background-color: #FFBF23;
  padding-left: 100px;
  padding-top: 40px;
  margin-top: 150px;

  @media screen and (max-width: 1024px) {
    padding-top: 100px;
  }

  @media screen and (max-width: 740px) {
    padding-left: 30px;
    width: 100%;
  }
`

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const LogoTextWrapper = styled.div`
  margin-left: 15px;
`

export const Logo = styled.img`
  width: 42px;
  height: 42px;

  @media screen and (max-width: 440px) {
    width: 40px;
    height: 40px;
  }
`

export const WeDu = styled.p`
  color: #000000;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 22px;
  margin-bottom: -13px;

  @media screen and (max-width: 440px) {
    font-size: 17px;
  }
`

export const Desc = styled.p`
  color: #000000;
  font-size: 14px;

  @media screen and (max-width: 440px) {
    font-size: 12px;
  }
`

export const ItemsWrapper = styled.div`
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`

export const FirstItems = styled.div`
  
`

export const SecondItems = styled.div`
  
`

export const ThirdItems = styled.div`
  
`

export const FourthItems = styled.div`
  
`

export const ItemsHeader = styled.p`
  color: #000000;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Space Grotesk', sans-serif;

  @media screen and (max-width: 440px) {
    font-size: 18px;
  }
`

export const MiniItemsWrappperOne = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-left: -20px;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    margin-left: 0px;
  }
`

export const MiniItemsWrappperTwo = styled.div`
  width: 170px;
  display: flex;
  flex-direction: column;
`

export const MiniItemsWrappperThree = styled.div`
  width: 340px;
  display: flex;
  flex-direction: column;
`

export const MiniItemsWrappperFour = styled.div`
  width: 170px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    width: 90%;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 40px;
  }
`

export const Item = styled.p`
  color: #000000;
  font-size: 16px;
  font-family: 'Space Grotesk', sans-serif;
  line-height: 25px;
  
  @media screen and (max-width: 440px) {
    font-size: 14px;
  }
`

export const Link = styled.a`
  color: #000000;
  font-size: 16px;
  font-family: 'Space Grotesk', sans-serif;
  margin-bottom: 20px;

  @media screen and (max-width: 440px) {
    font-size: 15px;
  }
`

export const EmailWrapper = styled.div`
  
`

export const Label = styled.p`
  color: #000000;
  font-size: 16px;
  font-family: 'Space Grotesk', sans-serif;
`

export const EmailInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Input = styled.input`
  background-color: #FFBF23;
  color: #000000;
  font-size: 16px;
  font-family: 'Space Grotesk', sans-serif;
  width: 178px;
  height: 38px;
  border: 2px solid #000000;
  border-radius: 5px;
  padding-left: 15px;

  :hover {
    background-color: #FFFFFF;
    outline: none;
  }

  :focus {
    background-color: #FFFFFF;
    outline: none;
  }

  @media screen and (max-width: 440px) {
    width: 80%;
  }
`

export const InputButton = styled.p`
  background-color: #000000;
  color: #FFFFFF;
  width: 102px;
  text-align: center;
  padding-top: 9px;
  padding-bottom: 12px;
  border-radius: 5px;
  margin-left: -10px;
  border: 1px solid #000000;
  transition: 0.3s ease-in-out;

  :hover {
    background-color: #996E00;
    color: #000000;
  }
`

export const SocialMediaLink = styled.a`
  color: #000000;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Space Grotesk', sans-serif;
  text-decoration: none;
  margin-bottom: 20px;

  @media screen and (max-width: 440px) {
    font-size: 18px;
  }
`

export default Footer;