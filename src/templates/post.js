import React from 'react'
import { graphql} from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../components/layout'

const Container = styled.div`
  max-width: 1040px;
  margin: 0 auto;
  margin-top: 2em;
`;

const Content = styled.div`
  margin: 0 2em;
`;

class PostTemplate extends React.Component {
  constructor() {
    super();
  }

  render() {
    const post = this.props.data.contentfulPortfolio;
    return (
      <Layout>
        <Container>
          <Content dangerouslySetInnerHTML={{__html: post.content.childMarkdownRemark.html}} />
        </Container>
      </Layout>
    )
  }
}

export default PostTemplate;

export const pageQuery = graphql`
  query postQuery($slug: String!) {
    contentfulPortfolio(slug: {eq: $slug}) {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
