import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => {
  return (
    <StyledHeader>
        <Title>
          <StyledLink to="/">{siteTitle}</StyledLink>
        </Title>
    </StyledHeader>
  )
}
const StyledHeader = styled.header`
  width: 100%;
  padding: var(--spacing-2) var(--spacing-4);

`

const Title = styled.h1`
  color: var(--color-text);
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
