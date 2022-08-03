import React from 'react';
import styled from "styled-components"
import Navbar from '../components/PricingPlansPage/Navbar'
import Header from '../components/PricingPlansPage/Header'
import PricingPlans from '../components/PricingPlansPage/PricingPlans'
import Footer from '../components/PricingPlansPage/Footer'

function PricingPlansPageCompound() {
    return (
        <Wrapper>
            <HeaderSectionWrapper>
                <Navbar />
                <Header />
            </HeaderSectionWrapper>

            <PricingPlans />
            <Footer />
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