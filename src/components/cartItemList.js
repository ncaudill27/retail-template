import React from "react"
import PropTypes from "prop-types"

import CartItem from "./cartItem"
import CartSpacer from "./cartSpacer"

const CartItemsList = ({ cart }) => (
  <>
    {cart.map(item => (
      <>
        <CartSpacer key={item.id} size={3} />
        <CartItem key={item.product_id} {...item} />
      </>
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
