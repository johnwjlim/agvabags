import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { connect } from 'react-redux'

export default class Listing extends React.Component {
    constructor() {
        super();
    }
    
    render() {
        return (
            <li>
                <Link to={`/products/${this.props.node.slug}/`}>
                    <p>{this.props.node.title} sample text</p>
                </Link>
            </li>
        )
    }
}