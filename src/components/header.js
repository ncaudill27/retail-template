import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => {
  return (
    <StyledHeader>
      <Wrapper>
        <Title>
          <StyledLink to="/">{siteTitle}</StyledLink>
        </Title>
      </Wrapper>
    </StyledHeader>
  )
}
const StyledHeader = styled.header`
  margin-bottom: var(--spacing-1);
  width: 100%;
`

const Wrapper = styled.div`
  top: 0;
  margin: 0 auto;
  width: 100%;
  padding: var(--spacing-4) var(--spacing-8);
`

const Title = styled.h1`
  margin: 0;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
