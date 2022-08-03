import React from 'react';
import styled from "styled-components"
import Navbar from '../components/ProductPage/Navbar'
import Products from '../components/ProductPage/Products'

function ProductPageCompound() {
    return (
        <Wrapper>
            <Navbar />
            <Products />
        </Wrapper>
    );
}

export const Wrapper = styled.div`
  
`

export default ProductPageCompound;