import React from 'react';
import styled from "styled-components"
import { useState } from "react"
import { useHistory } from 'react-router-dom'
import { PersonCircle } from '@styled-icons/ionicons-solid/PersonCircle'
import { MenuOutline } from '@styled-icons/evaicons-outline/MenuOutline'
import { Delete } from '@styled-icons/typicons/Delete'
<style>
  @import url('https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Dancing+Script:wght@500;700&family=Montserrat:wght@200;300;400&family=Poppins&family=Questrial&family=Quicksand:wght@300&family=Raleway:wght@100&family=Roboto:wght@300&family=Space+Grotesk&family=Suez+One&display=swap');
</style>

function Navbar() {

  const [showMenuSection, setShowMenuSection] = useState(false)

  const history = useHistory()

  return (
    <Wrapper>

      <>
        {showMenuSection ? (
          <MenuWrapper>
            <LogInOutWrapper>
              <LogInProfileWrapper>
                <ProfileIcon onClick={() => history.push('/DemoModePageCompound')} />
                <LogInText onClick={() => history.push('/DemoModePageCompound')}>Log In</LogInText>
              </LogInProfileWrapper>

              <ExitIcon onClick={() => setShowMenuSection(false)} />
            </LogInOutWrapper>

            <MenuItemsWrapper>
              <MenuFirstItem onClick={() => history.push('/')}>Home</MenuFirstItem>
              <MenuItem onClick={() => history.push('/ProductPageCompound')}>Product</MenuItem>
              <MenuItem onClick={() => history.push('/PricingPlansPageCompound')}>Pricing Plans</MenuItem>
              <MenuItem onClick={() => history.push('/ContactPageCompound')}>Contact</MenuItem>
            </MenuItemsWrapper>
          </MenuWrapper>
        ) : (
          <>
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
                <ProfileIcon onClick={() => history.push('/DemoModePageCompound')} />
                <Item onClick={() => history.push('/DemoModePageCompound')}>Log In</Item>
              </LogInWrapper>

              <ButtonWrapper>
                <Button onClick={() => history.push('/PricingPlansPageCompound')}>Get Started</Button>
              </ButtonWrapper>
            </ItemsWrapper>

            <MenuIcon onClick={() => setShowMenuSection(true)} />
          </>
        )}
      </>
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

export const MenuWrapper = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    overflow: hidden;
    margin-top: 50px;
  }
`

export const MenuItemsWrapper = styled.div`
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
    height: auto;
    background-color: #FFFFFF;
    margin-left: 50px;
  }
`

export const MenuFirstItem = styled.p`
  @media screen and (max-width: 1024px) {
    color: #6E6E6E;
    font-size: 22px;
    font-family: 'Space Grotesk', sans-serif;
    font-weight: bold;
    padding-bottom: 10px;
  }
`

export const MenuItem = styled.p`
  color: #000000;
  font-size: 16px;
  transition: 0.3s ease-in-out;
  padding-bottom: 10px;
  cursor: default;

  :hover {
    color: #6E6E6E;
  }

  @media screen and (max-width: 1024px) {
    font-size: 22px;
    font-family: 'Space Grotesk', sans-serif;
    font-weight: bold;
  }
`

export const LogInOutWrapper = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: initial;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 50px;
  }
`

export const LogInProfileWrapper = styled.div`
  @media screen and (max-width: 1024px) {
    display: flex;
    align-items: center;
  }
`

export const LogInText = styled.p`
  font-size: 16px;
  font-family: 'Space Grotesk', sans-serif;
`

export const ExitIcon = styled(Delete)`
  width: 35px;
  height: 38px;
  cursor: pointer;
  margin-right: 50px;
`

export default Navbar;