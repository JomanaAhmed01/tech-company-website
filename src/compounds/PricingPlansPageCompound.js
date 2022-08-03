import React from 'react';
import styled from "styled-components"
import Navbar from '../components/PricingPlansPage/Navbar'
import Header from '../components/PricingPlansPage/Header'
import PricingPlans from '../components/PricingPlansPage/PricingPlans'

function PricingPlansPageCompound() {
    return (
        <Wrapper>
            <HeaderSectionWrapper>
                <Navbar />
                <Header />
            </HeaderSectionWrapper>

            <PricingPlans />
        </Wrapper>
    );
}

export const Wrapper = styled.div`
  
`

export const HeaderSectionWrapper = styled.div`
  height: auto;
  background-color: #FFD7EF;
`

export default PricingPlansPageCompound;