import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"

import CartPortal from "./cartPortal"

const Header = ({ siteTitle }) => {
  return (
    <StyledHeader>
      <Wrapper>
        <Title>
          <StyledLink to="/">{siteTitle}</StyledLink>
        </Title>
        <CartPortal />
      </Wrapper>
    </StyledHeader>
  )
}
const StyledHeader = styled.header`
  width: 100%;
`

const Wrapper = styled.div`
  padding: var(--spacing-2) var(--spacing-10);
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
