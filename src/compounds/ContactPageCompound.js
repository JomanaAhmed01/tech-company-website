import React from 'react';
import styled from "styled-components"
import Navbar from '../components/ContactPage/Navbar'
import Contact from '../components/ContactPage/Contact'

function ContactPageCompound() {
  return (
    <Wrapper>
      <Navbar />
      <Contact />
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  
`

export default ContactPageCompound;