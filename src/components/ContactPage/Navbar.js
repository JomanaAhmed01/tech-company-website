import React from 'react';
import styled from "styled-components"
import { useHistory } from 'react-router-dom'
import { PersonCircle } from '@styled-icons/ionicons-solid/PersonCircle'
import { MenuOutline } from '@styled-icons/evaicons-outline/MenuOutline'
<style>
  @import url('https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Dancing+Script:wght@500;700&family=Montserrat:wght@200;300;400&family=Poppins&family=Questrial&family=Quicksand:wght@300&family=Raleway:wght@100&family=Roboto:wght@300&family=Space+Grotesk&family=Suez+One&display=swap');
</style>

function Navbar() {

  const history = useHistory()

  return (
    <Wrapper>
      <LogoWrapper>
        <Logo src='./img/logo.svg' />
        <LogoTextWrapper>
          <WeDu onClick={() => history.push('/')}>WeDu</WeDu>
          <Desc>Communicate. Collaborate. Create.</Desc>
        </LogoTextWrapper>
      </LogoWrapper>

      <ItemsWrapper>
        <FirstItem onClick={() => history.push('/')}>Home</FirstItem>
        <Item onClick={() => history.push('/ProductPageCompound')}>Product</Item>
        <Item onClick={() => history.push('/PricingPlansPageCompound')}>Pricing Plans</Item>
        <Item onClick={() => history.push('/ContactPageCompound')}>Contact</Item>

        <LogInWrapper>
          <ProfileIcon />
          <Item onClick={() => history.push('/DemoModePageCompound')}>Log In</Item>
        </LogInWrapper>

        <ButtonWrapper>
          <Button onClick={() => history.push('/PricingPlansPageCompound')}>Get Started</Button>
        </ButtonWrapper>
      </ItemsWrapper>

      <MenuIcon />
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  border-top: 8px solid #000000;

  @media screen and (max-width: 1024px) {
    align-items: center;
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
`

export const WeDu = styled.p`
  color: #000000;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 22px;
  margin-bottom: -13px;
  cursor: pointer;
`

export const Desc = styled.p`
  color: #000000;
  font-size: 14px;
`

export const ItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 600px;

  @media screen and (max-width: 1024px) {
    display: none;
  }
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
  display: flex;
  align-items: center;
`

export const ProfileIcon = styled(PersonCircle)`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`

export const ButtonWrapper = styled.div`
  width: 112px;
  height: 40px;
  margin-top: -30px;
`

export const Button = styled.p`
  background-color: #FFBF23;
  color: #000000;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 16px;
  font-weight: bold;
  padding-bottom: 10px;
  padding-top: 10px;
  text-align: center;
  border-radius: 5px;
  border: 2px solid #000000;
  transition: 0.3s ease-in-out;

  :hover {
    background-color: #000000;
    color: #FFBF23;
    cursor: pointer;
  }
`

export const MenuIcon = styled(MenuOutline)`
  display: none;

  @media screen and (max-width: 1024px) {
    display: initial;
    width: 50px;
    height: 50px;
  }

  @media screen and (max-width: 470px) {
    width: 40px;
    height: 40px;
  }
`

export default Navbar;