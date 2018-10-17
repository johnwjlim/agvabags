import React from 'react'
import { Link } from 'gatsby'
import { push } from 'gatsby'
import styled from 'styled-components'
import { connect } from 'react-redux'

import catalog from "../images/catalog.pdf"

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

const StyledA = styled.a`
    text-decoration: none;
    color: #484848;
`
const CategoryList = styled.ul`
    margin: 0;
    margin-left: 2.5em;
    padding-bottom: 1em;

`;

const CategoryItem = styled.li`
    list-style-type: none;
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
        const categoryEdges = this.props.categories;
        const occasionEdges = this.props.occasions;
        return (
            <nav>
                <List>
                    <MenuItem style={{borderColor: "white"}} >
                        <p style={{color: "#969696", marginBottom: "1em"}}>Browse by bag</p>
                        <CategoryList>
                            {categoryEdges.map(({node}) => (
                                <CategoryItem>
                                    <StyledLink style={{fontSize: "12px"}} to={`/categories/${node.slug}`} 
                                    onClick={() => this.props.toggle()}>
                                        {node.title}
                                    </StyledLink>
                                </CategoryItem>
                            ))}
                        </CategoryList>
                    </MenuItem>
                    <MenuItem >
                        <p style={{color: "#969696", marginBottom: "1em"}}>Browse by occasion</p>
                        <CategoryList>
                            {occasionEdges.map(({node}) => (
                                <CategoryItem>
                                    <StyledLink style={{fontSize: "12px"}} to={`/occasions/${node.slug}`} 
                                    onClick={() => this.props.toggle()}>
                                        {node.title}
                                    </StyledLink>
                                </CategoryItem>
                            ))}
                        </CategoryList>
                    </MenuItem>
                    <MenuItem onClick={() => this.props.toggle()}>
                        <StyledLink to = "/about"> 
                            <p>About</p>
                        </StyledLink>
                    </MenuItem>
                    <MenuItem onClick={() => this.props.toggle()}>
                        <StyledLink to = "/faq"> 
                            <p>FAQ</p>
                        </StyledLink>
                    </MenuItem>
                    <MenuItem onClick={() => this.props.toggle()}>
                        <StyledA href={catalog} > 
                            <p>Catalog</p>
                        </StyledA>
                    </MenuItem>
                </List>
            </nav>
        )
    }
}

const connectedMenu = connect(null, mapDispatchToProps)(mobileMenu);

export default connectedMenu;

