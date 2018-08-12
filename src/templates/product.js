import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default class ProductTemplate extends React.Component {
    render() {
        // const product = this.props.data.
        const product = this.props.data.contentfulProduct;
        console.log(product)
        return (
            <Layout>
                <div>
                    <h1>{product.title}</h1>
                    <h2>Product SKU: {product.sku}</h2>
                    <div>
                        <p dangerouslySetInnerHTML={{__html:product.description.childMarkdownRemark.html}}></p>
                    </div>
                </div>
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
        }
    }
`