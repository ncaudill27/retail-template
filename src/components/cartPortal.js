import React from 'react'
import styled from 'styled-components'
import Portal from '@reach/portal'
import { useShoppingCart } from 'use-shopping-cart'
import { formatPrice } from '../utils/helpers'

const CartPortal = ({showCart}) => {
  const { totalPrice, cartCount } = useShoppingCart()
  
  return (
    <Portal>
      <div>
        <p>
          Total Price: {formatPrice(totalPrice, 'USD')} <br />
          Item Count: {cartCount}
        </p>
      </div>
      <button onClick={showCart}>
        Show Cart
      </button>
    </Portal>
  )
}

export default CartPortal