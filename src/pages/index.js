import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import styled from 'styled-components'

const HeroText = styled.h1`
  font-family: "Montserrat Bold";
  font-size: 3.5em;
  letter-spacing: -1px;
  color: rebeccapurple;
`;

const HeroSubtext = styled.h2`
  font-family: "Montserrat";
  font-size: 1.5em;
  color: #484848;
`
const IndexPage = () => (
  <Layout>
    <HeroText>Hello world</HeroText>
    {/* <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p> */}
    <HeroSubtext>Lets go do something crazy</HeroSubtext>
    <Link to="/page-2/">Go to page 2</Link>
    {/* <div className="test" style={{marginBottom: "50rem"}}></div> */}
  </Layout>
)

export default IndexPage
