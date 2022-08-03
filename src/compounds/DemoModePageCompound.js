import React from 'react';
import styled from "styled-components"
import DemoMode from '../components/DemoModePage/DemoMode'


function DemoModePageCompound() {
    return (
        <Wrapper>
          <DemoMode />
        </Wrapper>
    );
}

export const Wrapper = styled.div`
  
`

export default DemoModePageCompound;