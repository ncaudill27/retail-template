import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"
import { useShoppingCart, DebugCart } from 'use-shopping-cart'
import { spacing, formatPrice } from "../utils/helpers"

import HeaderBackground from "./headerBackground"

const Header = ({ siteTitle }) => {
  const { totalPrice, redirectToCheckout, cartCount } = useShoppingCart()
    
  const handleCheckout = async e => {
    e.preventDefault()

    if (cartCount > 0) {
      const error = await redirectToCheckout()
      if (error) console.warn('Error bro')
    } else {
      // handle not enough item logging and shit
    }
  }

  return (
    <StyledHeader>
      <HeaderBackground />
      <Wrapper>
        <Title>
          <StyledLink to="/">{siteTitle}</StyledLink>
        </Title>
        <div>
          <p>
            Total Price: {formatPrice(totalPrice, 'USD')} <br />
            Item Count: {cartCount}
          </p>
          <button onClick={handleCheckout}>
            Checkout
          </button>
        </div>
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
  display: flex;
  justify-content: space-between;
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
