import React from 'react'
import { Link, graphql, navigate } from 'gatsby'
import styled from 'styled-components'
import { connect } from 'react-redux'

import logo from "../images/agva-logo.svg"


const Container = styled.header`
    display: none;
    background-color: white;
    margin-bottom: 1.5em;

    @media (max-width: 768px) {
        display: block;
    }
`;

const Wrapper = styled.div`
    margin: 0 auto;
    padding: 0.5em 1.5em;
    // text-align: center;
    display: flex;
    justify-content: space-between;
`;

const HeaderText = styled.h1`
    margin: auto 0;
    color: white;
    font-size: 1.2em;
`;

// const StyledLink = styled(Link)`
//     text-decoration: none;
//     color: white;

//     &:hover {
//         text-decoration: underline;
//     }
// `;

const MenuButton = styled.button`
    display: inline-block;
    background-color: transparent;
    margin: auto 0;
    padding: 0;
    // margin-top: 0.45em
    padding-top: 0.45em;
    border: none;
    cursor: pointer;
`;

const Logo = styled.img`
    // display: block;
    margin: auto 0;
    max-width: 5.1em;
`;

const LinkText = styled.h5`
    height: 100%;
    font-family: "Montserrat";
    font-weight: 500;
    font-size: 14px;
    margin: auto 0.6em;
    padding: 2.1em 0;
    // padding-bottom: 2.3em;
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

const mapDispatchToProps = dispatch => {
    return { toggle: () => {
        dispatch({ type: `TOGGLE_MENU`}) 
        console.log("action dispatched!")
        }

    }
}

const mapStateToProps = state => {
    return { menuState: state.toggleMenu, cart: state.cart }
}

const Icon = ({ menuState, toggle }) => (
    <MenuButton onClick={toggle}>
        {
            !menuState ?
            <i className="material-icons" style={{color: "#484848"}}>menu</i> :
            <i className="material-icons" style={{color: "#484848"}}>close</i>
        }
    </MenuButton>
)

// const Title = ({ menuState, toggle, children }) => (
//     <HeaderText>
//         {
//             menuState ?
//             <Link to = "/" onClick={toggle} style={{textDecoration: "none", color: "white"}}>
//                 Mobile Title
//             </Link> :
//             <Link to = "/" style={{textDecoration: "none", color: "white"}}>
//                 Mobile Title
//             </Link>
//         }
//     </HeaderText>
    
// )

// const ConnectedTitle = connect(mapStateToProps, mapDispatchToProps)(Title)

const ConnectedIcon = connect(mapStateToProps, mapDispatchToProps)(Icon)

class mobileHeader extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Container>
                <Wrapper>
                <ConnectedIcon/>
                    <HeaderText>
                        {
                            this.props.menuState ?
                            <Link to = "/" onClick={() => this.props.toggle()} style={{textDecoration: "none", color: "white"}}>
                                <Logo src={logo}></Logo>
                                {/* {this.props.siteTitle} */}
                            </Link> :
                            <Link to = "/" style={{textDecoration: "none", color: "white"}}>
                                {/* {this.props.siteTitle} */}
                                <Logo src={logo}></Logo>
                            </Link>
                        }
                    </HeaderText>
                    <LinkText> 
                        {
                            this.props.menuState ? 
                            <StyledLink to="/cart" onClick={() => this.props.toggle()}>Enquiry: {this.props.cart.length}</StyledLink> :
                            <StyledLink to="/cart">Enquiry: {this.props.cart.length}</StyledLink>
                        }
                    </LinkText>
                </Wrapper>
            </Container>
        )
    }
}

const connectedHeader = connect(mapStateToProps, mapDispatchToProps)(mobileHeader);

export default connectedHeader;
