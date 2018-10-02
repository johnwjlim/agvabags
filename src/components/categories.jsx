import React from 'react'
import { Link, navigate, graphql } from 'gatsby'
import styled from 'styled-components'
import { connect } from 'react-redux'
import Img from 'gatsby-image'

const Container = styled.div`
    padding: 3em 1em;
    // max-width: 1200px;
    text-align: center;
`;

// const WidthWrapper = styled.div`
//     max-width: 1200px;
//     // padding: 1em;
// `;

const Title = styled.h5`
    font-family: "Montserrat Bold";
    margin-bottom: 1.5em;
`;

const Text = styled.p`
    font-size: 20px;
    font-weight: 600;
    color: #767676;
    padding: 1em 3em;
`;

export default class Categories extends React.Component {
    constructor() {
        super();
    }
    
    render() {
        return (
            <Container>
                {/* <WidthWrapper> */}
                    <Title>WHAT WE DO</Title>
                    <Text>We design, source and manufacture backpacks, laptop bags as well as a variety of 
                        cut-and-sew consumer electronic accessories.
                    </Text>
                {/* </WidthWrapper> */}
            </Container>
        )
    }
}