import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'


import Layout from '../components/layout'
import ProductImages from '../components/productImages'

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0.5em;
`;

const Content = styled.div`
    display: grid;
    grid-template-columns: 0.58fr 0.42fr;

    @media(max-width: 768px) {
        display: block;
    }
`;

const ProductInfo = styled.div`
    padding: 1.7em 2em;
`;

const ProductTitleWrapper = styled.div`
    border-bottom: solid 1px #dddddd;
`;

const ProductTitle = styled.h1`
    font-family: "Montserrat";
    font-size: 1.42rem;
    font-weight: 500;
    // margin-top: 0.2em;
    margin-bottom: 0.5em;

    @media (max-width: 768px) {
        font-size: 1.45rem;
    }
`;

const ProductSKU = styled.h4`
    font-size: 0.67rem;
    font-family: "Montserrat Light";
    color: #767676;
    // margin: 0;
    margin-bottom: 0.5em;
`;

const SubtitleWrapper = styled.div`
    margin-top: 0;
    margin-bottom: 1em;
`;

const ProductDescription = styled.div`
`;

const Button = styled.button`
    font-family: "Montserrat Medium", "sans serif";
    letter-spacing: 0px;
    font-size: 0.6rem;
    // letter-spacing: -0.1px;
    padding: 1em 5em;
    color: white;
    background-color: #484848;
    cursor: pointer;
    // border-radius: 5px;
    // border-width: 0.5px;  
    margin: 0;  
    // margin-top: 0em;
    margin-bottom: 4em;

    &:hover {
        // background-color: #EE3124;
        background-color: #767676;
        color: white;
        transition: 0.2s;
        // border-color: #EE3124;
    }
`;

const ProductContentWrapper = styled.div`
    margin: 0.8em 0;
    padding: 0.8em 0;
    border-bottom: solid 1px #dddddd;
`;

const MicroText = styled.h6`
    font-family: "Montserrat", "sans serif";
    font-size: 0.5rem;
    color: #767676;
    margin-bottom: 1.5em;
`;

const SpecWrapper = styled.div`
    margin: 1em 0;
`;

const SpecLine = styled.div`
    display: flex;
`;

const SpecTitle = styled.p`
    // color: #767676;
    font-size: 13px;
    margin-right: 0.5em;
`;

const ConsumerWrapper = styled.div`
    border: solid 1px #767676;
    border-radius: 5px;
    padding: 4em 2em;
    text-align: center;
    max-width: 1024px;
    margin: 0em auto;
`;

const ConsumerButton = Button.extend`
    margin: 0;
    padding: 1em 5em;
    border-radius: 5px;
    border-width: 0.8px;
`;

const TextWrapper = styled.div`
    margin-bottom: 1.7em;
`

const ConsumerText = styled.h6`
    font-family: "Montserrat Medium";
    font-size: 0.8em;
    margin-bottom: 0.3em;

`;

const mapDispatchToProps = dispatch => {
    return {
        addCart: (product) => dispatch({ type: "ADD_CART", payload: product })
    }
}


class ProductTemplate extends React.Component {
    constructor() {
        super();
        this.state = {
            imageIndex: 0,
            // product: this.props.data.contentfulProduct
        }
    }

    handleAdd(product) {
        // evt.preventDefault();    
        console.log("button clicked")
        console.log(product);
        this.props.addCart(product);
        // console.log(this.state.product);
        // console.log(product);
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
                                <SubtitleWrapper>
                                    <ProductSKU>Product Code: {product.sku}</ProductSKU>
                                    <ProductSKU>Lead Time: about 3 months</ProductSKU>
                                </SubtitleWrapper>
                                {/* <ProductDescription className="descriptionText" dangerouslySetInnerHTML={{__html: product.description.childMarkdownRemark.html}}/> */}
                                <Button onClick={() => this.handleAdd(product)}>ADD TO ENQUIRY</Button>
                            </ProductTitleWrapper>
                            {/* <ProductContentWrapper>
                                <MicroText>FEATURES</MicroText>
                            </ProductContentWrapper> */}
                            <ProductContentWrapper>
                                <MicroText>DETAILS</MicroText>
                                <ProductDescription className="descriptionText" dangerouslySetInnerHTML={{__html: product.description.childMarkdownRemark.html}}/>
                            </ProductContentWrapper>
                            <ProductContentWrapper>
                                <MicroText>SPECIFICATIONS</MicroText>
                                <SpecWrapper>
                                    {/* <SpecLine>
                                        <SpecTitle>Dimensions: </SpecTitle>
                                        <p>{product.dimensions}</p>
                                    </SpecLine> */}
                                    {/* <p>{product.dimensions} <br/> {product.materials} </p> */}
                                    <ul>
                                        <li>{product.dimensions}</li>
                                        <li>{product.materials}</li>
                                    </ul>
                                </SpecWrapper>
                            </ProductContentWrapper>
                        </ProductInfo>
                    </Content>
                    <ConsumerWrapper>
                        <TextWrapper>
                            <ConsumerText>Like what you see but looking for an individual piece?</ConsumerText>
                            <ConsumerText>Check out this product on our consumer site.</ConsumerText>
                        </TextWrapper>
                        <ConsumerButton>Shop product</ConsumerButton>
                    </ConsumerWrapper>
                </Container>
            </Layout>
        )
    }
}

const connectedProductTemplate = connect(null, mapDispatchToProps)(ProductTemplate);
export default connectedProductTemplate;

export const pageQuery = graphql`
    query productQuery($slug: String!) {
        contentfulProduct(slug: {eq: $slug}) {
            title
            sku
            dimensions
            materials
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