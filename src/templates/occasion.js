import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { graphql } from 'gatsby'
import { push, navigate } from 'gatsby'
import Img from 'gatsby-image'


import Layout from '../components/layout'
import Listing from '../components/listing'


const Container = styled.div `
    max-width: 1200px;
    margin: 0 auto;
`;

const HeaderWrapper = styled.div`
    padding-bottom: 0em;
    padding-left: 2em;
    // border-bottom: solid 1px #dddddd;
    // text-align: center
`

const HeaderText = styled.h1`
    font-family: "Montserrat Medium";
    font-size: 1.6rem;
    margin: 0.5em auto;
    // text-align: center;
    padding-bottom: 0em;
    // border-bottom: solid 1px #dddddd;
`

const HeaderSubText = styled.h5`
   font-family: "Montserrat Light";
   font-size: 0.9rem;
   color: #767676;
   margin: 0.5em auto;
`

const GridWrapper = styled.div`
    // max-width: 1200px;
    margin: 0 auto;
    // text-align: center;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-auto-rows: minmax(250px ,auto);
    object-fit: cover;
`;

const Card = styled.div`
    position: relative;
    border-radius: 5px;
    padding: 1em;
    text-align: center;
    margin-bottom: 2em;
    padding-bottom: 3.5em;

    &:hover {
        cursor: pointer;
        box-shadow: 0 0px 0.2px 0 #767676;
    }
`;

const CardImageWrapper = styled.div`
    // text-align: center;
    // display: flex;
    max-height: 800px;
`;
const CardTextWrapper = styled.div`
    padding: 0.5em 0;
`;

const CardText = styled.p`
    text-align: center;
    font-family: "Open Sans";
    color: #484848;
    font-weight: 500;
    font-size: 0.9rem;
    // padding: 1em 0;
    margin: 0 auto;
`;

const CardSubText = CardText.extend`
    font-family: "Open Sans Light";
    font-size: 0.75rem;
    color: #767676;
`;

const Button = styled.button`
    position: absolute;
    left: 34%;
    font-family: "Open Sans Light", "sans serif";
    font-size: 0.7rem;
    padding: 0.3em 1.2em;
    color: #009688;
    background-color: white;
    cursor: pointer;
    border-radius: 3px;
    border-width: 0.5px;  
    border-color: #009688;
    // margin: 1em;
    margin: 0.5em; 
    margin-bottom: 2em;
    display: none;

    @media (max-width: 768px) {
        position: relative;
        display: inline;
        left: 0;
        margin-bottom: 0;
    }

    ${Card}:hover & {
        display: inline; 
        color: #009688;
        border-color: #009688;
        transition: 0.3s

        &:hover {
            background-color: white;
            color: #EE3124;
            border-color: #EE3124;
            transition: 0.3s;
        } 
    }
`;

const mapDispatchToProps = dispatch => {
    return {
        addCart: (product) => dispatch({ type: "ADD_CART", payload: product })
    }
}


class OccasionTemplate extends React.Component {
    constructor() {
        super();
    }

    handlePush(link, evt) {
        navigate(link);
    }

    handleChildClick(e, product) {
        e.stopPropagation();
        this.props.addCart(product);
    }

    render() {
        const category = this.props.data.contentfulOccasion;
        const productEdges = this.props.data.allContentfulProduct.edges;
        console.log(productEdges);
        console.log(category.product);
        return (
            <Layout>
                <Container>
                    <HeaderWrapper>
                        <HeaderText>{category.title}</HeaderText>
                        <HeaderSubText>{category.description.description}</HeaderSubText>
                    </HeaderWrapper>
                    <GridWrapper>
                        {productEdges.map(({node}) => (
                        <Card onClick={() => this.handlePush(`/products/${node.slug}`)} node={node}>
                            <CardImageWrapper>
                                {
                                    node.thumbnail ?
                                    <Img fluid={node.thumbnail.fluid} alt={node.thumbnail.title}/> :
                                    <p>theres nothing here</p>
                                }
                            </CardImageWrapper>
                            <CardTextWrapper>
                                <CardText>{node.title}</CardText>
                                <CardSubText>SKU: {node.sku}</CardSubText>
                            </CardTextWrapper>
                            <Button onClick={(e) => this.handleChildClick(e, node)}>+ Quick Add</Button>
                        </Card>
                        ))}
                    </GridWrapper>
                </Container>
            </Layout>
        )
    }
}

const connectedOccasionTemplate = connect(null, mapDispatchToProps)(OccasionTemplate);
export default connectedOccasionTemplate;

export const pageQuery = graphql`
    query OccasionQuery($id : String!) {
        contentfulOccasion(id: {eq: $id}) {
            title   
            description {
                description
            }
            product {
                title
                slug
                sku
                thumbnail {
                    fluid(maxHeight: 800) {
                        ...GatsbyContentfulFluid
                    }
                }
            }

        }
        allContentfulProduct (
            filter: {occasion: {id: {eq: $id}}}
            sort: {fields: [title], order: ASC}
          ) {
            edges {
              node {
                title
                slug
                sku
                thumbnail {
                    fluid(maxHeight: 800) {
                        ...GatsbyContentfulFluid
                    }
                }
              }
            }
        }
    }
`