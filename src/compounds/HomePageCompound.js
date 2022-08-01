import React from 'react';
import styled from "styled-components"
import Navbar from '../components/HomePage/Navbar'
import Communicate from '../components/HomePage/Communicate'
import RightSoftware from '../components/HomePage/RightSoftware'
import WhatWeOffer from '../components/HomePage/WhatWeOffer'

function HomePageCompound() {
  return (
    <Wrapper>
      <Navbar />
      <Communicate />
      <RightSoftware />
      <WhatWeOffer />
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  
`

export default HomePageCompound;