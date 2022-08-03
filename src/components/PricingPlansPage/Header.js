import React from 'react';
import styled from "styled-components"
<style>
    @import url('https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Dancing+Script:wght@500;700&family=Montserrat:wght@200;300;400&family=Poppins&family=Questrial&family=Quicksand:wght@300&family=Raleway:wght@100&family=Roboto:wght@300&family=Space+Grotesk&family=Suez+One&display=swap');
</style>

function Header() {
    return (
        <Wrapper>
            <TextWrapper>
                <HeaderText>Explore Our Pricing Plans</HeaderText>
                <Text>Use this area to describe one of your memberships.</Text>
            </TextWrapper>
        </Wrapper>
    );
}

export const Wrapper = styled.div`
  padding-bottom: 30px;
`

export const TextWrapper = styled.div`
  
`

export const HeaderText = styled.p`
  color: #000000;
  font-size: 50px;
  font-family: 'Space Grotesk', sans-serif;
  text-align: center;

  @media screen and (max-width: 730px) {
    font-size: 38px;
    width: 100%;
  }
`

export const Text = styled.p`
  color: #000000;
  font-size: 16px;
  font-family: 'Space Grotesk', sans-serif;
  text-align: center;
  margin-top: -30px;

  @media screen and (max-width: 730px) {
    font-size: 14px;
    margin-top: -20px;
    width: 100%;
  }
`

export default Header;