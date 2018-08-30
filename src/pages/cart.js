import React from 'react'
import { Link, push } from 'gatsby'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 1em 1.5em;
`;

const Title = styled.h1`
    font-family: "Montserrat Medium";
    font-size: 1.6rem;
    margin-bottom: 1.2em;
`;

const Content = styled.div`
    padding: 1em;
`;

const MicroTextWrapper = styled.div`
    display: flex;
`;

const MicroText = styled.h6`
    font-family: "Montserrat", "sans serif";
    font-size: 10px;
    color: #767676;
    margin-bottom: 1.5em;
    width: 50%;
`;

const List = styled.ul`
    margin: 0;
`;

const Listing = styled.li`
    list-style-type: none;
    border-top: solid 0.5px #dddddd;
    padding-top: 1.5em;
    margin-bottom: 3em;
    display: flex;
`;

const ListingSection = styled.div`
    width: 50%;
`;

const ProductGroup = styled.div`
    display: flex;
`;

const ImageWrapper = styled.div`
    width: 25%;
`;

const ProductTitle = styled.p`
    margin-left: 2.5em;
`;

const mapStateToProps = state => {
    return {cart: state.cart}
}

class Cart extends React.Component {
    constructor() {
        super();
    }

    handlePush(link) {
        console.log("link clicked!");
    }

    render() {
        const edges = this.props.cart;
        console.log(edges);
        return (
            <Layout>
                <Container>
                    <Title>Your Enquiry</Title>
                    {
                        (edges.length > 0) ?
                        <Content>
                            <MicroTextWrapper>
                                <MicroText>Product</MicroText>
                                <MicroText>SKU</MicroText>
                            </MicroTextWrapper>
                            <List>
                                {
                                    edges.map((node) => (
                                        <Listing>
                                            <ListingSection>
                                                <ProductGroup>
                                                    <ImageWrapper>
                                                        <Img fluid={node.thumbnail.fluid} alt={node.thumbnail.title}/>
                                                    </ImageWrapper>
                                                    <ProductTitle>{node.title}</ProductTitle>
                                                </ProductGroup>
                                            </ListingSection>
                                            <ListingSection>
                                                <ProductGroup>
                                                    {node.sku}
                                                </ProductGroup>
                                            </ListingSection>
                                        </Listing>
                                    ))
                                }
                            </List> 
                        </Content> :
                        <p>cart is empty</p>
                    }
                </Container>
            </Layout>
        )
    }
}

const connectedCart = connect(mapStateToProps)(Cart);

export default connectedCart;