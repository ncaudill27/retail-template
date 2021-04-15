import React from "react"
import PropTypes from "prop-types"

import CartItem from "./cartItem"

const CartItemsList = ({ cart }) => (
  <>
    {cart.map(item => (
      <CartItem key={item.id} {...item} />
    ))}
  </>
)

CartItemsList.propTypes = {
  cart: PropTypes.array,
}

CartItemsList.defaultProps = {
  cart: [],
}

export default CartItemsList
