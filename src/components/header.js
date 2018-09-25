import React from 'react'
import { Link, graphql, push } from 'gatsby'
import styled from 'styled-components'
import { connect } from 'react-redux'

import logo from "../images/agva-logo.svg"

import Headroom from "react-headroom"

const ResponsiveWrapper = styled(Headroom)`
  margin-bottom: 1em; 

  @media(max-width: 768px) {
    display: none;
  }
`;

const Container = styled.div`
  background-color: #fefefe;
  // max-width: 1024px; 
  // margin: 1.5em 1.8em;
  // margin-bottom: 1em; 
  border-bottom: 1px solid #dddddd;
  // box-shadow: 0 0px 0.2px 0 #767676;
  padding: 0 2.5em;

  z-index: 2;
  position: sticky;
  top: 0;

  @media(max-width: 768px) {
    display: none;
  }
`;

 const Wrapper = styled.div`
  // margin: 0 1.5em;
  padding: 0 0.45em;
  display: flex;
  justify-content: space-between;
 `;

 const Logo = styled.img`
  // display: block;
  margin: auto 0;
  max-width: 5.1em;
 `;

 const LogoLink = styled.a`
  display: flex; 
  align-items: center;
  cursor: pointer;
 `;

 const LogoText = styled.h1`
  padding: 0.2em 0;
  // font-size: 1.2em;
  margin: 0;
 `;

 const StyledLink = styled(Link)`
  text-decoration: none;
  // padding: 1.5em 0;
  // color: #484848;
  // color: #4f4f4f;
  color: #767676;

  &:hover {
    text-decoration: underline;
  }
 `;

 const DisabledLink = styled.h5`
  color: #767676;
  margin: 0;
 `

 const LinkWrapper = styled.div`
  // flex: 1; 
  // float: right;
  display: flex;
 `;

 const LinkText = styled.h5 `
  height: 100%;
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 14px;
  margin: auto 0.6em;
  padding: 2.1em 0;
  // padding-bottom: 2.3em;
 `;

//  const LinkTextDropdown = styled.h5 `
//   font-weight: 400;
//   font-size: 0.9em;
//   margin: auto 0.6em;
//  `;

 const LinkTextDropdown = LinkText.extend`
  color: #767676;
  cursor: pointer;
 `

 const Dropdown = styled.div`
  // float: left;
  margin-top: 3px;
  overflow: hidden;
  // text-align: center;
 `;

 const DropdownContent = styled.div`
  position: absolute;
  // text-align: center;
  top: 64px;
  left: 0;
  background-color: #fefefe;
  display: none;
  width: 100%;
  padding: 1.2em 0.5em;
  // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
  border: solid 1px #dddddd;
  z-index: 2;
  
  ${LinkTextDropdown}:hover & {
    // margin: 0 auto;
    display: block;
    justify-content: center;
  }
 `;

 const DropdownFlexbox = styled.div`
  display: flex;
  justify-content: center;
 `;

 const FlexboxWrapper = styled.div`
  margin: 0 2.3em;
  margin-bottom: 1em;
 `;

 const DropdownLinkWrapper = styled.div`
  margin: 1em 0;
 `;
 
 const DropdownTitle = styled.h6`
  margin-top: 1em;
  margin-bottom: 1.5em; 
  font-weight: 400;
  font-size: 14px;
 `;

 const DropdownLinkText = styled.h5`
  font-weight: 400;
  font-size: 14px;
  margin: 0.5em 0;
 `;

const mapDispatchToProps = dispatch => {
  return { close: () => 
      dispatch({ type: `CLOSE_MENU`}),

  }
}

const mapStateToProps = state => {
  return { cart: state.cart }
}

class Header extends React.Component {
  constructor() {
    super(); 
  }

  handleClick() {
    this.props.close();
    push('/');
  }

  render() {
    const categoryEdges = this.props.categories;
    const occasionEdges = this.props.occasions;
    // console.log(categoryEdges);
    return (
      // <ResponsiveWrapper>
        <Container>
          <Wrapper>
            {/* <LogoText>
              <StyledLink to="/" onClick={() => this.props.close()}>{this.props.siteTitle}</StyledLink> 
            </LogoText> */}
            <LogoLink onClick={() => this.handleClick()} style={{padding: 0}}>
              <Logo src={logo}></Logo>
            </LogoLink>
            <LinkWrapper>
              <LinkTextDropdown>
                Browse
                <DropdownContent>  
                  <DropdownFlexbox>
                    <FlexboxWrapper>
                      <DropdownTitle>Browse by bag</DropdownTitle>
                      {categoryEdges.map(({node}) => (
                        <DropdownLinkWrapper>
                          <DropdownLinkText key={node.id}>
                            <StyledLink style={{color: "#969696"}} to={`/categories/${node.slug}`}>{node.title}</StyledLink>
                          </DropdownLinkText>
                        </DropdownLinkWrapper>
                      ))}
                    </FlexboxWrapper>
                    <FlexboxWrapper>
                      <DropdownTitle>Browse by Occasion</DropdownTitle>
                      {occasionEdges.map(({node}) => (
                        <DropdownLinkWrapper>
                          <DropdownLinkText key={node.id}>
                            <StyledLink style={{color: "#969696"}} to={`/occasions/${node.slug}`}>{node.title}</StyledLink>
                          </DropdownLinkText>
                        </DropdownLinkWrapper>
                      ))}
                    </FlexboxWrapper>
                  </DropdownFlexbox>
                </DropdownContent>
              </LinkTextDropdown>
              {/* <LinkText>
                <StyledLink to="/page-2">Portfolio</StyledLink>
              </LinkText> */}
              <LinkText>
                <StyledLink to="/page-2">About</StyledLink>
              </LinkText>
              <LinkText>
                <StyledLink to="/page-2">FAQ</StyledLink>
              </LinkText>
            </LinkWrapper>
            <LinkWrapper>
              <LinkText>
                <StyledLink to="/page-2">Catalog</StyledLink>
              </LinkText>
              <LinkText> 
                <StyledLink to="/cart">Enquiry: {this.props.cart.length}</StyledLink>
              </LinkText>
            </LinkWrapper>
          </Wrapper>
        </Container>
      // </ResponsiveWrapper>
    )
  }
}

const connectedHeader = connect(mapStateToProps, mapDispatchToProps)(Header);

export default connectedHeader;

