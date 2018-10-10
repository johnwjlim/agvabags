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
`;

const Title = styled.h1`
    text-align: center;
    font-family: "Montserrat Medium";
    font-size: 36px;
    margin-bottom: 1em;
`;

class faqPage extends React.Component {
    constructor() {
        super();
    }

    render() {
        const page = this.props.data.contentfulPage;
        return (
            <Layout>
                <Container>
                    <Title>FREQUENTLY ASKED QUESTIONS</Title>
                    <Content dangerouslySetInnerHTML={{__html: page.content.childMarkdownRemark.html}} />
                </Container>
            </Layout>
        )
    }
}

export default faqPage;

export const pageQuery = graphql`
    query faqPageQuery {
        contentfulPage(slug: {eq: "faq"}) {
            content {
                childMarkdownRemark {
                    html
                }
            }
            title
        }
    }
`