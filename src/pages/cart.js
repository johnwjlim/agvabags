import React from 'react'
import { Link, push, navigate } from 'gatsby'
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
    font-size: 12px;
    color: #767676;
    margin-bottom: 1.2em;
    width: 50%;
`;

const List = styled.ul`
    margin: 0;
    overflow: scroll;
    height: 450px;
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

const ProductTitle = styled.a`
    margin-left: 2.5em;
    cursor: pointer;
`;

const Button = styled.button`
    font-family: "Montserrat Medium", "sans serif";
    letter-spacing: 0px;
    font-size: 0.8rem;
    color: #767676;
    background-color: white;
    cursor: pointer; 
    margin: 0;  
    border-color: white;
    border-radius: 5px;

    &:hover {
        background-color: #5e5e5e;
        color: white;
        transition: 0.2s;
    }
`;


const mapStateToProps = state => {
    return {cart: state.cart}
}

const mapDispatchToProps = dispatch => {
    return {
        removeCart: (index) => dispatch({ type: `REMOVE_CART`, payload: index }),
        resetCart: () => dispatch({ type: `RESET_CART` })
    }
}

class Cart extends React.Component {
    constructor() {
        super();
    }

    handleNavigate(link) {
        console.log("link clicked!");
        navigate(link);
    }

    handleRemove(index) {
        console.log(index);
        this.props.removeCart(index);
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
                                                    <ProductTitle onClick={() => this.handleNavigate(`/products/${node.slug}`) }>{node.title}</ProductTitle>
                                                </ProductGroup>
                                            </ListingSection>
                                            <ListingSection>
                                                <ProductGroup style={{justifyContent: "space-between"}}>
                                                    {node.sku}
                                                    <Button onClick={() => this.handleRemove(edges.indexOf(node))}>X</Button>
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

const connectedCart = connect(mapStateToProps, mapDispatchToProps)(Cart);

export default connectedCart;