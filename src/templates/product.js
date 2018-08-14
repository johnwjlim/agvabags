import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'


import Layout from '../components/layout'

const Container = styled.div`
    padding: 0 2em;
`;

const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media(max-width: 768px) {
        display: block;
    }
`;

const ProductInfo = styled.div`
    padding: 1.5em 0;
`;

const ProductTitle = styled.h1`
    font-family: "Montserrat Medium";
    font-size: 1.8rem;
`

export default class ProductTemplate extends React.Component {
    render() {
        // const product = this.props.data.
        const product = this.props.data.contentfulProduct;
        return (
            <Layout>
                <Container>
                    <Content>
                        <div>
                            {
                                product.images ?
                                <Img fluid={product.images[0].fluid} alt={product.images[0].title}/> :
                                <p>no image available</p>
                            }
                        </div>
                        {/* <div>
                            <h1>{product.title}</h1>
                            <h2>Product SKU: {product.sku}</h2>
                            <div dangerouslySetInnerHTML={{__html: product.description.childMarkdownRemark.html}}/>
                        </div> */}
                        <ProductInfo>
                            <ProductTitle>{product.title}</ProductTitle>
                            <p>{product.sku}</p>
                            <div className="descriptionText" dangerouslySetInnerHTML={{__html: product.description.childMarkdownRemark.html}}/>
                        </ProductInfo>
                    </Content>
                </Container>
            </Layout>
        )
    }
}

export const pageQuery = graphql`
    query productQuery($slug: String!) {
        contentfulProduct(slug: {eq: $slug}) {
            title
            sku
            description {
                childMarkdownRemark {
                    html
                }
            }
            images {
                fluid(maxWidth: 800) {
                    ...GatsbyContentfulFluid
                }
            }
        }
    }
`