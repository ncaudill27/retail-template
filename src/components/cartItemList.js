import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import CartItem from "./cartItem"

const CartItemsList = ({ cart }) => (
  <StyledCartList>
    {cart.map(item => {
      console.log(item)
      return <CartItem {...item} />
    })}
  </StyledCartList>
)

const StyledCartList = styled.div`
  border: 1px solid;
`

CartItemsList.propTypes = {
  cart: PropTypes.array,
}

CartItemsList.defaultProps = {
  cart: [],
}

export default CartItemsList
