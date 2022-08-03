import React from 'react';
import styled from "styled-components"
import Navbar from '../components/ProductPage/Navbar'
import Products from '../components/ProductPage/Products'
import Footer from '../components/ProductPage/Footer'

function ProductPageCompound() {
    return (
        <Wrapper>
            <Navbar />
            <Products />
            <Footer />
        </Wrapper>
    );
}

export const Wrapper = styled.div`
  
`

export default ProductPageCompound;