import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const MenuItem = styled.li`
    list-style-type: none; 
    border-bottom: 1px solid #ddd;
    padding: 0 1em;
    // font-family: 'Open Sans';
    // font-size: 1rem;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
`;

export default class mobileMenu extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <nav>
                <List>
                    <MenuItem>
                        <p>uno</p>
                    </MenuItem>
                    <MenuItem>
                        <p>dos</p>
                    </MenuItem>
                    <MenuItem>
                        <p>tres</p>
                    </MenuItem>
                </List>
            </nav>
        )
    }
}

