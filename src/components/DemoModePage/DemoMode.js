import React from 'react';
import styled from "styled-components"
import { useHistory } from 'react-router-dom'
import { Delete } from '@styled-icons/typicons/Delete'
<style>
  @import url('https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Dancing+Script:wght@500;700&family=Montserrat:wght@200;300;400&family=Poppins&family=Questrial&family=Quicksand:wght@300&family=Raleway:wght@100&family=Roboto:wght@300&family=Space+Grotesk&family=Suez+One&display=swap');
</style>

function DemoMode() {

  const history = useHistory()

  return (
    <Wrapper>
      <XIconWrapper>
        <ExitIcon onClick={() => history.push('/')} />
      </XIconWrapper>
      <TextWrapper>
        <Header>Demo Mode</Header>
        <Text>To make this template yours, start editing it.</Text>
        <Button onClick={() => history.push('/')}>OK</Button>
      </TextWrapper>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  
`

export const XIconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 50px;
  margin-top: 30px;
`

export const ExitIcon = styled(Delete)`
  width: 35px;
  height: 38px;
  cursor: pointer;
`

export const TextWrapper = styled.div`
  margin-top: 120px;
`

export const Header = styled.p`
  color: #000000;
  font-size: 48px;
  font-family: 'Space Grotesk', sans-serif;
  text-align: center;
`

export const Text = styled.p`
  color: #000000;
  font-size: 16px;
  font-family: 'Space Grotesk', sans-serif;
  text-align: center;
  margin-top: -30px;
`

export const Button = styled.p`
  width: 190px;
  background-color: #996E00;
  color: #FFFFFF;
  font-size: 16px;
  font-family: 'Space Grotesk', sans-serif;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  cursor: pointer;
`

export default DemoMode;