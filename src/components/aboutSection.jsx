import React from 'react'
import { Link, navigate, graphql } from 'gatsby'
import styled from 'styled-components'
import { connect } from 'react-redux'
import Img from 'gatsby-image'

const Container = styled.div`
    padding: 5em 4em;
    background-color: #B0B0B0;
    // text-align: center;
    // display: flex;
    // justify-content: center;

    @media (max-width: 768px) {
        padding: 3em 2em;
    }
`;

const Text = styled.h4`
    // font-family: "Montserrat";
    // margin: 0 auto;
    padding: 0 1.2em;
    font-weight: 500;
    font-size: 32px;
    color: white;

    @media (max-width: 768px) {
        padding: 0;
        font-size: 24px;
    }
`;

const ButtonWrapper = styled.div`
    text-align: center;
    margin-top: 2.5em;
`

const Button = styled.button`
  font-family: "Montserrat";
  font-size: 1em;
  font-weight: 400;
  padding: 1em 2em;
  color: white;
  background-color: #B0B0B0;
  cursor: pointer;
  // margin: 1.8rem 0;
  border-radius: 5px;
  border-width: 1.2px;  
  border-color: white;
  // z-index: 2;

  &:hover {
    background-color: white;
    // color: #701512;
    color: #767676;
    transition: 0.3s;
  }
`;


export default class About extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Container>
                <Text>
                    For the past 20 years, our sourcing and production teams have supported some of the world's
                    largest retailers with their most demanding OEM and ODM projects. 
                </Text>
                <Text>
                    We're not your typical corporate gift marketplace. We're industry experts committed to delivering
                    tailored solutions for your unique corporate needs.
                </Text>
                <ButtonWrapper>
                    <Button>LEARN MORE</Button>
                </ButtonWrapper>
            </Container>
        )
    }
}