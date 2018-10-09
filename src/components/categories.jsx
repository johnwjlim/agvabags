import React from 'react'
import { Link, navigate, graphql } from 'gatsby'
import styled from 'styled-components'
import { connect } from 'react-redux'
import Img from 'gatsby-image'

const Container = styled.div`
    padding: 2.5em 1em;
    // max-width: 1200px;
    text-align: center;
    margin: 2em;
`;


const Title = styled.h5`
    font-family: "Montserrat Bold";
    margin-bottom: 1.5em;
`;

const Text = styled.p`
    font-size: 20px;
    font-weight: 600;
    color: #767676;
    padding: 1em 3em;
    // max-width: 1200px;
    // text-align: center;
`;

const Grid = styled.div`
    display: flex;
    justify-content: center;
    margin: 2em 0;
    flex-wrap: wrap;
`;

const ImageWrapper = styled.div`
    min-width: 300px;
    margin: 2em;
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
                    <Grid>
                        <Link to="/categories/backpacks">
                            <ImageWrapper>
                                <Img fluid={this.props.backpacks.childImageSharp.fluid}/>
                            </ImageWrapper>
                        </Link>
                        <Link to="/categories/carry-cases">
                            <ImageWrapper>
                                <Img fluid={this.props.laptopCases.childImageSharp.fluid}/>
                            </ImageWrapper>
                        </Link>
                        <Link to="/categories/accessories">
                            <ImageWrapper>
                                <Img fluid={this.props.accessories.childImageSharp.fluid}/>
                            </ImageWrapper>
                        </Link>
                    </Grid>
            </Container>
        )
    }
}