import React from 'react';
import styled from "styled-components"
import Navbar from '../components/HomePage/Navbar'
import Communicate from '../components/HomePage/Communicate'
import RightSoftware from '../components/HomePage/RightSoftware'
import WhatWeOffer from '../components/HomePage/WhatWeOffer'
import BuiltForCreatives from '../components/HomePage/BuiltForCreatives'
import IndustryLeaders from '../components/HomePage/IndustryLeaders'
import ClientsReview from '../components/HomePage/ClientsReview'
import PricingOptions from '../components/HomePage/PricingOptions'
import MaximizeYourProductivity from '../components/HomePage/MaximizeYourProductivity'
import Footer from '../components/HomePage/Footer'

function HomePageCompound() {
  return (
    <Wrapper>
      <Navbar />
      <Communicate />
      <RightSoftware />
      <WhatWeOffer />
      <BuiltForCreatives />
      <IndustryLeaders />
      <ClientsReview />
      <PricingOptions />
      <MaximizeYourProductivity />
      <Footer />
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  
`

export default HomePageCompound;