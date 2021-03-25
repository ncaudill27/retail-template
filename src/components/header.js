import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import { spacing } from "../utils/helpers"

import HeaderBackground from './headerBackground'

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <HeaderBackground />
    <Wrapper>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </Wrapper>
  </StyledHeader>
)

const StyledHeader = styled.header`
  margin-bottom: ${spacing(1)};
`
const Wrapper = styled.div`
  margin: 0 auto;
  maxwidth: 960;
  padding: ${spacing(5)} ${spacing(3)};
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
