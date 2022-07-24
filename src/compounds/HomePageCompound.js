import React from 'react';
import styled from "styled-components"
import Navbar from '../components/HomePage/Navbar'

function HomePageCompound() {
    return (
        <Wrapper>
          <Navbar />
        </Wrapper>
    );
}

export const Wrapper = styled.div`
  
`

export default HomePageCompound;