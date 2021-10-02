import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"
import { useShoppingCart } from "use-shopping-cart"

import Heading from "./typography/headingPri"
import CartPortal from "../components/cartPortal"

const Header = ({ siteTitle, showCart }) => {
  // check cartCount to determine whether to render CartPortal
  const { cartCount } = useShoppingCart()

  return (
    <StyledHeader>
      <StyledLink to="/">
        <Heading>{siteTitle}</Heading>
      </StyledLink>
      {cartCount > 0 && <CartPortal showCart={showCart} />}
    </StyledHeader>
  )
}
const StyledHeader = styled.header`
  width: 100%;
  padding: var(--spacing-2) var(--spacing-4);

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
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
