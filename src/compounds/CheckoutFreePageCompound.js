import React from 'react';
import styled from "styled-components"
import Navbar from '../components/CheckoutPage/Navbar'
import CheckoutFree from '../components/CheckoutPage/CheckoutFree'

function CheckoutPageCompound() {
  return (
    <Wrapper>
      <HeaderSectionWrapper>
        <Navbar />
      </HeaderSectionWrapper>

      <CheckoutFree />
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