import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Listing from "../components/listing"

export default class SecondPage extends React.Component {
  constructor() {
    super();
  }

  render() {
    const productEdges = this.props.data.allContentfulProduct.edges;
    console.log(this.props.data.allContentfulProduct.edges);
    
    return (
      <Layout>
        <h1>all products are here</h1>
        <p>Welcome to page 2</p>
        <p>Product listing demonstration</p>
        <ul>
          {productEdges.map(({node}) => (
            <Listing node={node} key={node.id}></Listing>
          ))}
        </ul>
        <Link to="/">Take me back to the homepage!!!</Link>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query {
    allContentfulProduct {
      edges {
        node {
          id
          title
          slug
          sku
        }
      }
    }
  }
`
