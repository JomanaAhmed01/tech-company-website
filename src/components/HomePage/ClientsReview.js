import React from 'react';
import styled from "styled-components"
<style>
    @import url('https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Dancing+Script:wght@500;700&family=Montserrat:wght@200;300;400&family=Poppins&family=Questrial&family=Quicksand:wght@300&family=Raleway:wght@100&family=Roboto:wght@300&family=Space+Grotesk&family=Suez+One&display=swap');
</style>

function ClientsReview() {
    return (
        <Wrapper>
            <TextWrapper>
                <Header>What Our Clients Say</Header>
            </TextWrapper>

            <CardsWrapper>
                <CardWrapper>
                    <Text>“I'm a testimonial.
                        Click to edit me and add text that says something nice about you and your services.
                        Let your customers review you and tell their friends how great you are.”
                    </Text>

                    <ClientWrapper>
                        <Plant src='./img/plant-1.svg' />
                        <Client>Deena Levies, Mission Bay</Client>
                    </ClientWrapper>
                </CardWrapper>

                <CardWrapper>
                    <Text>“I'm a testimonial.
                        Click to edit me and add text that says something nice about you and your services.
                        Let your customers review you and tell their friends how great you are.”
                    </Text>

                    <ClientWrapper>
                        <Plant src='./img/plant-2.svg' />
                        <Client>Tom Smithenson, Parkmerced</Client>
                    </ClientWrapper>
                </CardWrapper>

                <CardWrapper>
                    <Text>“I'm a testimonial.
                        Click to edit me and add text that says something nice about you and your services.
                        Let your customers review you and tell their friends how great you are.”
                    </Text>

                    <ClientWrapper>
                        <Plant src='./img/plant-3.svg' />
                        <Client>Tilly Green, Hayes Valley</Client>
                    </ClientWrapper>
                </CardWrapper>
            </CardsWrapper>
        </Wrapper>
    );
}

export const Wrapper = styled.div`
  margin-top: 100px;
  height: auto;
`

export const TextWrapper = styled.div`
  margin-left: 150px;

  @media screen and (max-width: 1024px) {
    margin-left: 0px;
  }
`

export const Header = styled.p`
  color: #000000;
  font-size: 38px;
  font-family: 'Space Grotesk', sans-serif;
  margin-bottom: 50px;

  @media screen and (max-width: 1024px) {
    text-align: center;
  }

  @media screen and (max-width: 470px) {
    font-size: 24px;
  }
`

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  width: 90%;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`

export const CardWrapper = styled.div`
  background-image: url('./img/board.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 281px;
  height: 400px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 50px;
  }
`

export const Text = styled.p`
  color: #000000;
  font-size: 16px;
  font-family: 'Space Grotesk', sans-serif;
  line-height: 1.6em;
  width: 200px;
  padding-top: 60px;
  padding-left: 40px;
`

export const ClientWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 30px;
`

export const Plant = styled.img`
  width: 114px;
  height: 120px;
  margin-left: -20px;
`

export const Client = styled.p`
  color: #000000;
  font-size: 16px;
  font-weight: bold;
  width: 120px;
`

export default ClientsReview;