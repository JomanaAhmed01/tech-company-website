import React from 'react';
import styled from "styled-components"
import Navbar from '../components/ProductPage/Navbar';

function ProductPageCompound() {
    return (
        <Wrapper>
            <Navbar />
        </Wrapper>
    );
}

export const Wrapper = styled.div`
  
`

export default ProductPageCompound;