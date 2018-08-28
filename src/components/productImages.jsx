import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

const Container = styled.div`
    display: grid;
    padding: 1em;
    grid-template-columns: 20% 80%;

    @media (max-width: 768px) {
        grid-template-columns: 100%;
        grid-template-rows: 90% 10%;
    }
`;

const ThumbnailWrapper = styled.div`
    // margin: 2em 0;
    padding: 1em 0;
    @media (max-width: 768px) {
        grid-row: 2;
        display: flex;
    }
`;

const ActiveThumbnail = styled.li`
    padding: 1em 0; 
    list-style: none;
    border: 1px solid #767676;
    border-radius: 1px;

    @media (max-width: 768px) {
        width: 25%;
        margin: 2em 1em;
    }
`;

const Thumbnail = ActiveThumbnail.extend`
    border: none;

    &:hover {
        cursor: pointer;
        border: 1px solid #dddddd;
    }
`;


const ImageWrapper = styled.div` 
    padding: 0 1em;
    @media (max-width: 768px) {
        grid-row: 1;
    }
`;

export default class ProductImages extends React.Component {
    constructor() {
        super();
        this.state= {
            imageIndex: 0
        }
    }

    handleClick(index) {
        console.log("thumbnail clicked! index: " + index);
        this.setState({imageIndex: index});
    }

    render() {
        const images = this.props.images;
        return (
            <Container>
                <ThumbnailWrapper>
                    {images.map((node, index) => (
                        <>
                        {
                            (index === this.state.imageIndex) ?
                            <ActiveThumbnail key={index} onClick={() => this.handleClick(index)}>
                                <Img fluid={images[index].fluid} alt={images[index].title}/>
                            </ActiveThumbnail> :
                            <Thumbnail key={index} onClick={() => this.handleClick(index)}>
                                <Img fluid={images[index].fluid} alt={images[index].title}/>
                            </Thumbnail>  
                        }
                        </>
                    ))}
                </ThumbnailWrapper>
                <ImageWrapper>
                    <Img fluid={images[this.state.imageIndex].fluid} alt={images[this.state.imageIndex].title}/>
                </ImageWrapper>
            </Container>
        )
    }
}