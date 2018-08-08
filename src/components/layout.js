import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { connect } from "react-redux"

import Header from './header'
import MobileHeader from "./mobileHeader"
import MobileMenu from "./mobileMenu"

import './layout.css'
import './styles.css'

const ChildrenWrapper = styled.div`
  margin: 0 auto;
  padding: 0.5em 1.5em;
`;


const mapStateToProps = state => {
  // console.log("menu state " + state.toggleMenu)
  return { menuState: state.toggleMenu }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     toggle: () => dispatch ({ type: `TOGGLE_MENU` })
//   }
// }


const Layout = ({ children, data, menuState }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title}/>
        <MobileHeader siteTitle={data.site.siteMetadata.title}/>
        {
          menuState ?
          <MobileMenu/> :
          <ChildrenWrapper>
            {children}
          </ChildrenWrapper> 
        }
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const ConnectedLayout = connect(mapStateToProps)(Layout);

export default ConnectedLayout;
