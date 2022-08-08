import React from 'react';
import styled from "styled-components"
import Navbar from '../components/CheckoutPage/Navbar'
import CheckoutStandard from '../components/CheckoutPage/CheckoutStandard'

function CheckoutStandardPageCompound() {
  return (
    <Wrapper>
      <HeaderSectionWrapper>
        <Navbar />
      </HeaderSectionWrapper>

      <CheckoutStandard />
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  
`

export const HeaderSectionWrapper = styled.div`
  height: 300px;
  background-color: #FFD7EF;
`

export default CheckoutStandardPageCompound;