import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { connect } from 'react-redux'

const Container = styled.header`
    display: none;
    background-color: teal;
    margin-bottom: 1.5em;

    @media (max-width: 768px) {
        display: block;
    }
`;

const Wrapper = styled.div`
    margin: 0 auto;
    padding: 0.5em 1.5em
    // text-align: center;
    display: flex;
`;

const HeaderText = styled.h1`
    margin: auto 0;
    color: white;
    font-size: 1.2em;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;

    &:hover {
        text-decoration: underline;
    }
`;

const MenuButton = styled.button`
    background-color: transparent;
    margin: auto 0;
    // margin-top: 0.4em;
    padding: 0;
    vertical-align: middle;
    border: none;
`;

const mapDispatchToProps = dispatch => {
    return { toggle: () => {
        dispatch({ type: `TOGGLE_MENU`}) 
        console.log("action dispatched!")
        }
    }
}

const Menu = ({ toggle }) => (
    <MenuButton onClick={toggle}>
        <i className="material-icons">menu</i>
    </MenuButton>
)

const ConnectedMenu = connect(null, mapDispatchToProps)(Menu)


export default class mobileHeader extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Container>
                <Wrapper>
                    {/* <Link to = "/" style={{textDecoration: "none"}}>
                        <HeaderText>
                            {this.props.siteTitle}
                        </HeaderText>
                    </Link> */}
                    <ConnectedMenu/>
                    <HeaderText>
                        <StyledLink to = "/">
                            {this.props.siteTitle}
                        </StyledLink>
                    </HeaderText>
                </Wrapper>
            </Container>
        )
    }
}