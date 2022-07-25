import React from 'react';
import styled from "styled-components"
import { PersonCircle } from '@styled-icons/ionicons-solid/PersonCircle'
<style>
    @import url('https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Dancing+Script:wght@500;700&family=Montserrat:wght@200;300;400&family=Poppins&family=Questrial&family=Quicksand:wght@300&family=Raleway:wght@100&family=Roboto:wght@300&family=Space+Grotesk&family=Suez+One&display=swap');
</style>

function Navbar() {
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
                <FirstItem>Home</FirstItem>
                <Item>Product</Item>
                <Item>Pricing Plans</Item>
                <Item>Contact</Item>

                <LogInWrapper>
                    <Item>Log In</Item>
                    <ProfileIcon />
                </LogInWrapper>

                <ButtonWrapper>
                    <Button>Get Started</Button>
                </ButtonWrapper>
            </ItemsWrapper>
        </Wrapper>
    );
}

export const Wrapper = styled.div`
  
`

export const LogoWrapper = styled.div`
  
`

export const LogoTextWrapper = styled.div`
  
`

export const Logo = styled.img`
  width: 42px;
  height: 42px;
`

export const WeDu = styled.p`
  color: #000000;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 22px;
`

export const Desc = styled.p`
  color: #000000;
  font-size: 14px;
`

export const ItemsWrapper = styled.div`
  
`

export const FirstItem = styled.p`
  color: #6E6E6E;
  font-size: 16px;
  cursor: default;
`

export const Item = styled.p`
  color: #000000;
  font-size: 16px;
  transition: 0.3s ease-in-out;
  cursor: default;

  :hover {
    color: #6E6E6E;
  }
`

export const LogInWrapper = styled.div`
  
`

export const ProfileIcon = styled(PersonCircle)`
  width: 26px;
  height: 26px;
`

export const ButtonWrapper = styled.div`
  width: 112px;
  height: 40px;
`

export const Button = styled.p`
  background-color: #FFBF23;
  color: #000000;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 16px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
`

export default Navbar;