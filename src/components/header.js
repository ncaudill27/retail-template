import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"
import { useShoppingCart, DebugCart } from 'use-shopping-cart'
import { spacing } from "../utils/helpers"

import HeaderBackground from "./headerBackground"

const Header = ({ siteTitle }) => {
  const { totalPrice, redirectToCheckout, cartCount } = useShoppingCart()
    
  return (
    <StyledHeader>
      <HeaderBackground />
      <Wrapper>
        <Title>
          <StyledLink to="/">{siteTitle}</StyledLink>
        </Title>
        <div>
          <p>
            Total Price: {totalPrice} <br />
            Item Count: {cartCount}
          </p>
        </div>
      </Wrapper>
    </StyledHeader>
  )
}
const StyledHeader = styled.header`
  margin-bottom: ${spacing(1)};
  isolation: isolate;
`

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  margin: 0 auto;
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
