import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { spacing } from "../utils/helpers"

import CartItem from "./cartItem"
import CartSpacer from "./cartSpacer"

const CartItemsList = ({ cart }) => (
  <StyledCartList>
    {cart.map(item => (
      <>
        <CartSpacer key={item.id} size={3} />
        <CartItem key={item.product_id} {...item} />
      </>
    ))}
  </StyledCartList>
)

const StyledCartList = styled.div`
  margin: -${spacing(2)};
  padding: ${spacing(2)};
  background-color: white;
`

CartItemsList.propTypes = {
  cart: PropTypes.array,
}

CartItemsList.defaultProps = {
  cart: [],
}

export default CartItemsList
