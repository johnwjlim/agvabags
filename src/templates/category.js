import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { graphql } from 'gatsby'
import { push } from 'gatsby'
import Img from 'gatsby-image'


import Layout from '../components/layout'
import Listing from '../components/listing'


// export const pageQuery = graphql`
//     query categoryQuery($id: String!) {
//         contentfulCategory(id {eq: $id}) {
//             title
            
//         }
//     }
// `
const Container = styled.div `
    max-width: 1024px;
    margin: 0 auto;
`;

const HeaderWrapper = styled.div`
    padding-bottom: 1.2em;
    border-bottom: solid 1px #dddddd;
    text-align: center
`

const HeaderText = styled.h4`
    font-family: "Montserrat Medium";
    font-size: 1.8rem;
    margin: 0.5em auto;
    // text-align: center;
    // padding-bottom: 1.2em;
    // border-bottom: solid 1px #dddddd;
`

const HeaderSubText = styled.h5`
   font-family: "Montserrat Light";
   font-size: 0.9rem;
   color: #767676;
   margin: 1em auto;
`

const GridWrapper = styled.div`
    // max-width: 1024px;
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
    // font-weight: 600;
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
    // z-index: -1;
    font-family: "Open Sans Light", "sans serif";
    font-size: 0.7rem;
    padding: 0.3em 1.2em;
    color: #484848;
    background-color: white;
    cursor: pointer;
    border-radius: 3px;
    border-width: 0.5px;  
    border-color: #767676;
    // margin: 1em;
    margin: 0.5em; 
    margin-bottom: 2em;
    display: none;

    @media (max-width: 768px) {
        position: relative;
        display: inline;
        left: 0;
    }

    ${Card}:hover & {
        display: inline; 
        color: #484848;
        border-color: #767676;
        transition: 0.3s

        &:hover {
            background-color: white;
            color: #EE3124;
            border-color: #EE3124;
            transition: 0.3s;
        } 
    }
`;

export default class CategoryTemplate extends React.Component {
    constructor() {
        super();
    }

    handlePush(link, evt) {
        // evt.stopPropogation();
        console.log("handle parent click");
        push(link);
    }

    handleChildClick(e) {
        e.stopPropagation();
        console.log("handle child click");
    }

    render() {
        const category = this.props.data.contentfulCategory;
        return (
            <Layout>
                <Container>
                    <HeaderWrapper>
                        <HeaderText>{category.title}</HeaderText>
                        <HeaderSubText>{category.description.description}</HeaderSubText>
                    </HeaderWrapper>
                    {/* <ul>
                        {category.product.map((node) => (
                            <Listing node={node} key={node.edge}></Listing>
                        ))}
                    </ul> */}
                    <GridWrapper>
                        {category.product.map((node) => (
                            <Card onClick={() => this.handlePush(`/products/${node.slug}`)} key={node.id} node={node}>
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
                                <Button onClick={(e) => this.handleChildClick(e)}>+ Quick Add</Button>
                            </Card>
                        ))}
                    </GridWrapper>
                </Container>
            </Layout>
        )
    }
}

export const pageQuery = graphql`
    query CategoryQuery($id : String!) {
        contentfulCategory(id: {eq: $id}) {
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
    }
`