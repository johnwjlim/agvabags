import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { connect } from 'react-redux'

import Headroom from "react-headroom"

const ResponsiveWrapper = styled(Headroom)`
  margin-bottom: 1.5em; 

  @media(max-width: 768px) {
    display: none;
  }
`;

const Container = styled.div`
  background-color: rebeccapurple; 
`;

 const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0.5em 1.5em;
  display: flex;
  justify-content: space-between;
 `;

 const LogoText = styled.h1`
  font-size: 1.3em;
  margin: 0;
 `;

 const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;

  &:hover {
    text-decoration: underline;
  }
 `;

 const LinkWrapper = styled.div`
  // float: right;
  display: flex;
 `;

 const LinkText = styled.h5 `
  font-weight: 400;
  font-size: 0.9em;
  margin: auto 0.6em;
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
      // console.log("action dispatched!")
      }
  }
}

class Header extends React.Component {
  constructor() {
    super(); 
  }

  render() {
    return (
      <ResponsiveWrapper>
        <Container>
          <Wrapper>
            <LogoText>
              <StyledLink to="/" onClick={() => this.props.close()}>{this.props.siteTitle}</StyledLink> 
            </LogoText>
            <LinkWrapper>
              <LinkText>
                <StyledLink to="./page-2">UNO</StyledLink>
              </LinkText>
              <LinkText>
                <StyledLink to="./page-2">DOS</StyledLink>
              </LinkText>
              <LinkText>
                <StyledLink to="./page-2">TRES</StyledLink>
              </LinkText>
            </LinkWrapper>
          </Wrapper>
        </Container>
      </ResponsiveWrapper>
    )
  }
}

const connectedHeader = connect(null, mapDispatchToProps)(Header);

export default connectedHeader
