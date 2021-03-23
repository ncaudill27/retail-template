import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { SIZES } from '../styles/constants'

import Header from "./header"
import "./layout.css"
import styled from "styled-components"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Wrapper>
        <main>{children}</main>
        <Footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </Footer>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding-bottom: ${SIZES[1]}px;
`

const Footer = styled.footer`
  margin-top: 2rem;
  padding: 0 ${SIZES[0]}px;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
