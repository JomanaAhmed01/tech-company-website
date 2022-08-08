import React from 'react';
import styled from "styled-components"
import Navbar from '../components/CheckoutPage/Navbar'
import CheckoutPremium from '../components/CheckoutPage/CheckoutPremium'

function CheckoutPremiumPageCompound() {
  return (
    <Wrapper>
      <HeaderSectionWrapper>
        <Navbar />
      </HeaderSectionWrapper>

      <CheckoutPremium />
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  
`

export const HeaderSectionWrapper = styled.div`
  height: 300px;
  background-color: #FFD7EF;
`

export default CheckoutPremiumPageCompound;