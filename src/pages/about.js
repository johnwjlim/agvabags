import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'

const Container = styled.div`
    max-width: 1040px;
    margin: 0 auto;
    margin-top: 2em;
`;

const Content = styled.div`
    margin: 0 2em;
`;

const Title = styled.h1`
    text-align: center;
    font-family: "Montserrat Medium";
    // font-size: 1.6rem;
    margin-bottom: 1em;
`;

class AboutPage extends React.Component {
    constructor() {
        super();
    }

    render() {
        const page = this.props.data.contentfulPage;
        return (
            <Layout>
                <Container>
                    <Title>About Us</Title>
                    <Content dangerouslySetInnerHTML={{__html: page.content.childMarkdownRemark.html}} />
                </Container>
            </Layout>
        )
    }
}

export default AboutPage;

export const pageQuery = graphql`
    query aboutPageQuery {
        contentfulPage(slug: {eq: "about"}) {
            content {
                childMarkdownRemark {
                    html
                }
            }
            title
        }
    }
`