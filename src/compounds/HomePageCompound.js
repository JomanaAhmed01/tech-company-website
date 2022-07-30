import React from 'react';
import styled from "styled-components"
import Navbar from '../components/HomePage/Navbar'
import Communicate from '../components/HomePage/Communicate'

function HomePageCompound() {
  return (
    <Wrapper>
      <Navbar />
      <Communicate />
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  
`

export default HomePageCompound;