import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Listing from '../components/listing'

// export const pageQuery = graphql`
//     query categoryQuery($id: String!) {
//         contentfulCategory(id {eq: $id}) {
//             title
            
//         }
//     }
// `

export default class CategoryTemplate extends React.Component {
    constructor() {
        super();
    }

    render() {
        const category = this.props.data.contentfulCategory;
        return (
            <Layout>
                <h1>{category.title}</h1>
                <ul>
                    {category.product.map((node) => (
                        <Listing node={node} key={node.edge}></Listing>
                    ))}
                </ul>
            </Layout>
        )
    }
}

export const pageQuery = graphql`
    query CategoryQuery($id : String!) {
        contentfulCategory(id: {eq: $id}) {
            title   
            product {
                title
                slug
            }
        }
    }
`