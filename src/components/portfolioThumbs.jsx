import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

const Container = styled.div`
  padding: 4.5em 1em;
  text-align: center;
`;

const Title = styled.h5`
  font-family: "Montserrat Bold";
  margin: 1.5em 0;
`;

const Grid = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: block;
  }
`;


const ImageWrapper = styled.div`
  padding: 3em;
  flex: 1;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
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
            <StyledLink to="/portfolio/asean">
              <Img fluid={this.props.asean.childImageSharp.fluid} />
            </StyledLink>
          </ImageWrapper>
          <ImageWrapper>
            <StyledLink to="/portfolio/volvo">
              <Img fluid={this.props.volvo.childImageSharp.fluid} />
            </StyledLink>
          </ImageWrapper>
          <ImageWrapper>
            <StyledLink to="/portfolio/keppel-land">
              <Img fluid={this.props.keppel.childImageSharp.fluid} />
            </StyledLink>
          </ImageWrapper>
        </Grid>
      </Container>
    )
  }
}

export default PortfolioThumbs;