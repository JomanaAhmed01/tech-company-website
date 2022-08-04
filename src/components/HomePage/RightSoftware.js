import React from 'react';
import styled from "styled-components"
<style>
  @import url('https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Dancing+Script:wght@500;700&family=Montserrat:wght@200;300;400&family=Poppins&family=Questrial&family=Quicksand:wght@300&family=Raleway:wght@100&family=Roboto:wght@300&family=Space+Grotesk&family=Suez+One&display=swap');
</style>

function RightSoftware() {
  return (
    <Wrapper>
      <TextWrapper>
        <Header>With the Right Software, Great Things Can Happen</Header>
        <Text>I'm a paragraph.
          Click here to add your own text and edit me.
          It’s easy.
          Just click “Edit Text” or double click me to add your own content and make changes to the font.
          Feel free to drag and drop me anywhere you like on your page.
          I’m a great place for you to tell a story and let your users know a little more about you.</Text>
      </TextWrapper>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  margin-top: 150px;
  background-color: #FFBF23;
  height: 420px;

  @media screen and (max-width: 950px) {
    height: auto;
  }
`

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 100px;

  @media screen and (max-width: 950px) {
    flex-direction: column;
    padding-top: 70px;
    padding-bottom: 70px;
  }
`

export const Header = styled.p`
  color: #000000;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 38px;
  width: 375px;
  line-height: 50px;

  @media screen and (max-width: 950px) {
    text-align: left;
    margin-left: -110px;
  }

  @media screen and (max-width: 570px) {
    font-size: 24px;
    width: 243px;
    line-height: 35px;
    margin-left: -40px;
  }
`

export const Text = styled.p`
  color: #000000;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 16px;
  width: 481px;
  line-height: 30px;

  @media screen and (max-width: 950px) {
    text-align: left;
  }

  @media screen and (max-width: 570px) {
    font-size: 15px;
    width: 280px;
    /* margin-left: -70px; */
  }
`

export default RightSoftware;