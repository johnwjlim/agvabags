import React from 'react'
import { Link } from 'gatsby'
import { push } from 'gatsby'
import styled from 'styled-components'
import { connect } from 'react-redux'

const MenuItem = styled.li`
    list-style-type: none; 
    border-bottom: 1px solid #ddd;
    padding: 0 1.5em;
    // font-family: 'Open Sans';
    // font-size: 1rem;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #484848;

    // &:hover {
    //     text-decoration: underline;
    // }
`;


const mapDispatchToProps = dispatch => {
    return { toggle: () => {
        dispatch({ type: `TOGGLE_MENU`}) 
        // console.log("action dispatched!")
        }
    }
}


class mobileMenu extends React.Component {
    constructor() {
        super();
    }


    render() {
        return(
            <nav>
                <List>
                    <MenuItem onClick={() => this.props.toggle()}>
                        <StyledLink to = "/page-2">
                            <p>Uno</p>
                        </StyledLink>
                    </MenuItem>
                    <MenuItem onClick={() => this.props.toggle()}>
                        <StyledLink to = "/page-2"> 
                            <p>Dos</p>
                        </StyledLink>
                    </MenuItem>
                    <MenuItem onClick={() => this.props.toggle()}>
                        <StyledLink to = "/page-2"> 
                            <p>Tres</p>
                        </StyledLink>
                    </MenuItem>
                </List>
            </nav>
        )
    }
}

const connectedMenu = connect(null, mapDispatchToProps)(mobileMenu);

export default connectedMenu;

