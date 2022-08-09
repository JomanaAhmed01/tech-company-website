import React from 'react';
import styled from "styled-components"
import { useHistory } from 'react-router-dom'
import { PersonCircle } from '@styled-icons/ionicons-solid/PersonCircle'
import { Delete } from '@styled-icons/typicons/Delete'
<style>
  @import url('https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Dancing+Script:wght@500;700&family=Montserrat:wght@200;300;400&family=Poppins&family=Questrial&family=Quicksand:wght@300&family=Raleway:wght@100&family=Roboto:wght@300&family=Space+Grotesk&family=Suez+One&display=swap');
</style>

function MobileMenu() {

  const history = useHistory()

  return (
    <Wrapper>
      <LogInOutWrapper>
        <LogInProfileWrapper>
          <ProfileIcon onClick={() => history.push('/DemoModePageCompound')} />
          <LogInText onClick={() => history.push('/DemoModePageCompound')}>Log In</LogInText>
        </LogInProfileWrapper>

        <ExitIcon onClick={() => history.push('/')} />
      </LogInOutWrapper>

      <ItemsWrapper>
        <FirstItem onClick={() => history.push('/')}>Home</FirstItem>
        <Item onClick={() => history.push('/ProductPageCompound')}>Product</Item>
        <Item onClick={() => history.push('/PricingPlansPageCompound')}>Pricing Plans</Item>
        <Item onClick={() => history.push('/ContactPageCompound')}>Contact</Item>
      </ItemsWrapper>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
    margin-top: 50px;
  }
`

export const ItemsWrapper = styled.div`
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
    height: auto;
    background-color: #FFFFFF;
    margin-left: 50px;
  }
`

export const FirstItem = styled.p`
  @media screen and (max-width: 1024px) {
    color: #6E6E6E;
    font-size: 22px;
    font-family: 'Space Grotesk', sans-serif;
    font-weight: bold;
    padding-bottom: 10px;
  }
`

export const Item = styled.p`
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

export const LogInWrapper = styled.div`
  @media screen and (max-width: 1024px) {
    display: none;
  }
`

export const ProfileIcon = styled(PersonCircle)`
  width: 30px;
  height: 30px;
  margin-right: 10px;
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

export default MobileMenu;