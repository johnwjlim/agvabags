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
    display: inline-block;
    background-color: transparent;
    margin: auto 0;
    padding: 0;
    // margin-top: 0.45em
    padding-top: 0.45em;
    border: none;
    cursor: pointer;
`;


const mapDispatchToProps = dispatch => {
    return { toggle: () => {
        dispatch({ type: `TOGGLE_MENU`}) 
        console.log("action dispatched!")
        }
    }
}

const mapStateToProps = state => {
    return { menuState: state.toggleMenu }
}

const Icon = ({ menuState, toggle }) => (
    <MenuButton onClick={toggle}>
        {
            !menuState ?
            <i className="material-icons" style={{color: "white"}}>menu</i> :
            <i className="material-icons" style={{color: "white"}}>close</i>
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
                                Menu Open
                                {/* {this.props.siteTitle} */}
                            </Link> :
                            <Link to = "/" style={{textDecoration: "none", color: "white"}}>
                                {/* {this.props.siteTitle} */}
                                Menu Closed
                            </Link>
                        }
                    </HeaderText>
                </Wrapper>
            </Container>
        )
    }
}

const connectedHeader = connect(mapStateToProps, mapDispatchToProps)(mobileHeader);

export default connectedHeader;
