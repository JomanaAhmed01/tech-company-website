import React from 'react';
import styled from "styled-components"
import Navbar from '../components/CheckoutPage/Navbar'
// import CheckoutFree from '../components/CheckoutPage/CheckoutFree'
// import CheckoutStandard from '../components/CheckoutPage/CheckoutStandard'
import CheckoutPremium from '../components/CheckoutPage/CheckoutPremium'

function CheckoutPageCompound() {
  return (
    <Wrapper>
      <HeaderSectionWrapper>
        <Navbar />
      </HeaderSectionWrapper>

      {/* <CheckoutFree /> */}
      {/* <CheckoutStandard /> */}
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

export default CheckoutPageCompound;