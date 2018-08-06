import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Headroom from "react-headroom"

const Container = styled.div`
  background-color: rebeccapurple; 
`;

 const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0.5rem 3rem;
 `;

 const HeaderText = styled.h1`
  margin: 0;
  color: white;
 `;

 const ResponsiveWrapper = styled(Headroom)`
  margin-bottom: 1.5rem; 

  @media(max-width: 768px) {
    display: none;
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

export default class Header extends React.Component {
  constructor() {
    super(); 
  }

  render() {
    return (
      <ResponsiveWrapper>
        <Headroom>
          <Container>
            <Wrapper>
              <Link to ="/" style={{textDecoration: "none"}}>
                <HeaderText>{this.props.siteTitle}</HeaderText>
              </Link>
            </Wrapper>
          </Container>
        </Headroom>
      </ResponsiveWrapper>
    )
  }
}
