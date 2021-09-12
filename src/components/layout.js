import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import MaxWidthWrapper from "./maxWidthWrapper"
// TODO switch from generic gatsby css reset

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
      <Header siteTitle={data?.site?.siteMetadata?.title || `Title`} />
      <main>{children}</main>
      <Footer>
        <MaxWidthWrapper>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </MaxWidthWrapper>
      </Footer>
    </>
  )
}

const Footer = styled.footer`
  margin-top: 2rem;
  padding: 0 var(--spacing-0);
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
