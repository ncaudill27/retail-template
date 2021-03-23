import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components"
import { theme } from '../styles/theme'
import { spacing } from '../utils/helpers'

import Header from "./header"
import "./layout.css"

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
    <ThemeProvider theme={theme}>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Wrapper>
        <main>{children}</main>
        <Footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </Footer>
      </Wrapper>
    </ThemeProvider>
  )
}

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding-bottom: ${spacing(0)}px;
`

const Footer = styled.footer`
  margin-top: 2rem;
  padding: 0 ${spacing(0)}px;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
