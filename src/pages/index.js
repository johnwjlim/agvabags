import React from 'react'
import { Link, push, navigate, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

import HeroImg from '../images/hero-small.jpg'
import Layout from '../components/layout'
import Categories from '../components/categories'
import About from "../components/aboutSection"

const BgImage = styled(Img)`
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  positon: absolute;

`;

const ImageWrapper = styled.div`
  height: 600px;

  @media(max-width: 768px) {
    display: none;
  }
`;

const HeroText = styled.h1`
  font-family: "Montserrat Bold";
  font-size: 3.5em;
  // letter-spacing: -1px;
  color: #484848;

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

const HeroSubtext = styled.h2`
  font-family: "Montserrat";
  font-size: 1.5em;
  color: #767676;

  @media (max-width: 768px) {
    font-size: 0.8em;
    padding: 1em;
  }
`;

const Hero = styled.div`
  // width: 1440px;
  height: 550px;
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  background-image: url(${HeroImg});
  opacity: 1;
  position: relative;
  // z-index: -1;
  text-align: center;
  padding: 8em 0;

  @media (max-width: 768px) {
    background-size: auto;
  }

`;

const HeaderTitle = styled.h1`
  font-family: "Montserrat Bold";
  color: white;
`;

const HeroSubtitle = styled.h3`
  font-family: "Montserrat Light";
  font-weight: 400;
  color: white;
  margin-bottom: 2.3em;
`;

const Button = styled.button`
  font-family: "Montserrat";
  font-size: 0.8em;
  font-weight: 400;
  padding: 1em 2em;
  color: white;
  background-color: transparent;
  cursor: pointer;
  // margin: 1.8rem 0;
  border-radius: 5px;
  border-width: 1.2px;  
  border-color: white;
  // z-index: 2;

  &:hover {
    background-color: white;
    // color: #701512;
    color: #767676;
    transition: 0.3s;
  }
`;


class IndexPage extends React.Component {
  constructor() {
    super();
  }

  handlePushToProducts() {
    navigate(`/categories/backpacks`);
  }

  render() {
    return (
      <Layout>
        {/* <ImageWrapper>
          <BgImage
          css={{top: 0, left: 0, right: 0, zIndex: -1}}
          style={{position: "absolute"}}
          fluid={this.props.data.hero.childImageSharp.fluid}
          />
          <HeaderTitle>Industry Expertise. Personal Touch.</HeaderTitle>
          <HeroSubtitle>Tailored solutions for your corporate needs</HeroSubtitle>
          <Button onClick={() => this.handlePushToProducts()}>EXPLORE OUR BAGS</Button>
        </ImageWrapper> */}
        <Hero>
          <HeaderTitle>Industry Expertise. Personal Touch.</HeaderTitle>
          <HeroSubtitle>Tailored solutions for your corporate needs</HeroSubtitle>
          <Button onClick={() => this.handlePushToProducts()}>EXPLORE OUR BAGS</Button>
        </Hero>
        <Categories/>
        <Img fluid={this.props.data.tailor.childImageSharp.fluid}/>
        <About/>
        {/* <HeroText>Hello world</HeroText>
        <HeroSubtext>Lets go do something crazy</HeroSubtext>
        <Link to="/page-2/">Go to page 2</Link> */}
      </Layout>
    )
  }
  
}


export default IndexPage;

export const query = graphql`
  query {
    tailor:file(relativePath: {eq:"images/tailor.jpg"}) {
      childImageSharp {
        fluid(maxHeight: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    hero:file(relativePath: {eq:"images/hero-small.jpg"}) {
      childImageSharp {
        fluid(maxHeight: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
