import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Container = styled.div`
  padding: 4.5em 1em;
  text-align: center;
`;

const Title = styled.h5`
  font-family: "Montserrat Bold";
  margin: 1.5em 0;
  // margin-top: 2em;

`;

const Grid = styled.div`
  display: flex;
`;


const ImageWrapper = styled.div`
  padding: 3em;
  flex: 1;
`;


class PortfolioThumbs extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Container>
        <Title>VIEW OUR PAST WORK</Title>
        <Grid>
          <ImageWrapper>
            <Img fluid={this.props.asean.childImageSharp.fluid} />
          </ImageWrapper>
          <ImageWrapper>
            <Img fluid={this.props.volvo.childImageSharp.fluid} />
          </ImageWrapper>
          <ImageWrapper>
            <Img fluid={this.props.keppel.childImageSharp.fluid} />
          </ImageWrapper>
        </Grid>
      </Container>
    )
  }
}

export default PortfolioThumbs;