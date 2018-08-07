import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

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
`;

const HeaderText = styled.h1`
    margin: 0;
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
                    <HeaderText>
                        <StyledLink tp = "/">
                            {this.props.siteTitle}
                        </StyledLink>
                    </HeaderText>
                </Wrapper>
            </Container>
        )
    }
}