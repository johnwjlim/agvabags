import React from 'react'
import { Link, graphql, push } from 'gatsby'
import styled from 'styled-components'
import { connect } from 'react-redux'

import logo from "../images/agva-logo.svg"

import Headroom from "react-headroom"

const ResponsiveWrapper = styled(Headroom)`
  margin-bottom: 1.5em; 

  @media(max-width: 768px) {
    display: none;
  }
`;

const Container = styled.div`
  background-color: white;
  // max-width: 1024px; 
  margin: 0 auto;
  margin-bottom: 1em; 
  border-bottom: 1px solid #dddddd;
  // box-shadow: 0 0px 0.2px 0 #767676;
  padding: 1.5em 1.8em;

  

  @media(max-width: 768px) {
    display: none;
  }
`;

 const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 1.5em;
  display: flex;
  justify-content: space-between;
 `;

 const Logo = styled.img`
  // display: block;
  margin: auto 0;
  max-width: 5.8em;
 `;

 const LogoLink = styled.a`
  display: flex; 
  align-items: center;
  cursor: pointer;
 `;

 const LogoText = styled.h1`
  padding: 0.2em 0;
  font-size: 1.3em;
  margin: 0;
 `;

 const StyledLink = styled(Link)`
  text-decoration: none;
  color: #484848;

  &:hover {
    text-decoration: underline;
  }
 `;

 const LinkWrapper = styled.div`
  // float: right;
  display: flex;
  margin: 0.5em 0;
 `;

 const LinkText = styled.h5 `
  // color: #484848;
  height: 100%;
  font-weight: 400;
  font-size: 0.9em;
  margin: auto 0.6em;
 `;

//  const LinkTextDropdown = styled.h5 `
//   font-weight: 400;
//   font-size: 0.9em;
//   margin: auto 0.6em;
//  `;

 const LinkTextDropdown = LinkText.extend`
 `

 const Dropdown = styled.div`
  float: left;
  margin-top: 3px;
  overflow: hidden;
 `;

 const DropdownContent = styled.div`
  position: absolute;
  top: 27px;
  background-color: white;
  display: none;
  width: 8.5em;
  padding: 1.2em 0.5em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  ${LinkTextDropdown}:hover & {
    display: block;
  }
 `;


// const Header = ({ siteTitle }) => (
//   <Headroom wrapperStyle={{marginBottom: "1.5rem"}}>
//     <Container>
//       <Wrapper>
//         <Link to ="/" style={{textDecoration: "none"}}>
//           <HeaderText>{siteTitle}</HeaderText>
//         </Link>
//       </Wrapper>
//     </Container>
//   </Headroom>
// )

// export default Header

const mapDispatchToProps = dispatch => {
  return { close: () => {
      dispatch({ type: `CLOSE_MENU`}) 
      }
  }
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
    const categoryEdges = this.props.edges
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
                <StyledLink to="/page-2">Browse by bag</StyledLink>
                <DropdownContent>  
                  {categoryEdges.map(({node}) => (
                    <Link key={node.id} to={`/categories/${node.id}`}>
                      <h4>{node.title}</h4>
                    </Link>
                  ))}
                </DropdownContent>
              </LinkTextDropdown>
              <LinkText>
                <StyledLink to="/page-2">Portfolio</StyledLink>
              </LinkText>
              <LinkText>
                <StyledLink to="/page-2">About</StyledLink>
              </LinkText>
            </LinkWrapper>
          </Wrapper>
        </Container>
      // </ResponsiveWrapper>
    )
  }
}

const connectedHeader = connect(null, mapDispatchToProps)(Header);

export default connectedHeader

