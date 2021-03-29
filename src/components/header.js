import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"
import { spacing } from "../utils/helpers"

import HeaderBackground from "./headerBackground"

const Header = ({ siteTitle }) => {
  return (
    <StyledHeader>
      <HeaderBackground />
      <Wrapper>
        <Title>
          <StyledLink to="/">{siteTitle}</StyledLink>
        </Title>
      </Wrapper>
    </StyledHeader>
  )
}
const StyledHeader = styled.header`
  margin-bottom: ${spacing(1)};
  width: 100%;
`

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  margin: 0 auto;
  width: 100%;
  padding: ${spacing(5)} ${spacing(3)};
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
