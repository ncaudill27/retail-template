import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import { spacing } from '../utils/helpers'

const Header = ({ siteTitle }) => (
  <StyledHeader>
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
  background: rebeccapurple;
  margin-bottom: ${spacing(1)};
`
const Wrapper = styled.div`
  margin: 0 auto;
  maxwidth: 960;
  padding: 1.45rem 1.0875rem;
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
