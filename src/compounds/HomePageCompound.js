import React from 'react';
import styled from "styled-components"
import Navbar from '../components/HomePage/Navbar'
import Communicate from '../components/HomePage/Communicate'
import RightSoftware from '../components/HomePage/RightSoftware'
import WhatWeOffer from '../components/HomePage/WhatWeOffer'
import BuiltForCreatives from '../components/HomePage/BuiltForCreatives'
import IndustryLeaders from '../components/HomePage/IndustryLeaders'

function HomePageCompound() {
  return (
    <Wrapper>
      <Navbar />
      <Communicate />
      <RightSoftware />
      <WhatWeOffer />
      <BuiltForCreatives />
      <IndustryLeaders />
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  
`

export default HomePageCompound;