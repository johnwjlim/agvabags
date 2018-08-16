import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'


import Layout from '../components/layout'
import ProductImages from '../components/productImages'

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

const ProductTitleWrapper = styled.div`
    border-bottom: solid 1px #dddddd;
`;

const ProductTitle = styled.h1`
    font-family: "Montserrat Medium";
    font-size: 1.5rem;
    margin-bottom: 0.5em;
`;

const ProductSKU = styled.h4`
    font-size: 0.75rem;
    font-family: "Open Sans Light";
    font-color: #767676;
`;

const ProductDescription = styled.div`
`;

const Button = styled.button`
    font-family: "Montserrat Medium", "sans serif";
    letter-spacing: 0px;
    font-size: 0.7rem;
    padding: 0.8em 5em;
    // color: #009688;
    color: white
    background-color: #484848;
    cursor: pointer;
    border-radius: 5px;
    border-width: 0.5px;  
    // border-color: #009688;
    margin: 0.1em;  
    margin-bottom: 2em;

    &:hover {
        // background-color: #EE3124;
        background-color: #767676;
        color: white;
        transition: 0.2s;
        // border-color: #EE3124;
    }
`;
const ProductContentWrapper = styled.div`
    margin 1.5em 0;
`;

const MicroText = styled.h6`
    font-family: "Montserrat", "sans serif";
    font-size: 0.55rem;
    color: #767676;
    margin-bottom: 1.5em;
`;

export default class ProductTemplate extends React.Component {
    constructor() {
        super();
        this.state = {
            imageIndex: 0
        }
    }
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
                                <ProductImages images={product.images}/> :
                                <p>no image available</p>
                            }
                        </div>
                        {/* <div>
                            <h1>{product.title}</h1>
                            <h2>Product SKU: {product.sku}</h2>
                            <div dangerouslySetInnerHTML={{__html: product.description.childMarkdownRemark.html}}/>
                        </div> */}
                        <ProductInfo>
                            <ProductTitleWrapper>
                                <ProductTitle>{product.title}</ProductTitle>
                                <ProductSKU>Product Code: {product.sku}</ProductSKU>
                                {/* <ProductSKU>$49.90</ProductSKU> */}
                                <Button>ADD TO ENQUIRY</Button>
                            </ProductTitleWrapper>
                            <ProductContentWrapper>
                                <MicroText>DESCRIPTION</MicroText>
                                <ProductDescription className="descriptionText" dangerouslySetInnerHTML={{__html: product.description.childMarkdownRemark.html}}/>
                            </ProductContentWrapper>
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