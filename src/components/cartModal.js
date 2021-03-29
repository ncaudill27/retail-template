import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useShoppingCart } from 'use-shopping-cart'
import { formatPrice } from '../utils/helpers'

import Modal from './modal'
import CartItemsList from './cartItemList'

const CartModal = ({showDialog, closeDialog}) => {
  const label = 'cart__random-id-number'
  const { cartDetails, totalPrice, cartCount, redirectToCheckout } = useShoppingCart()
  
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
    <ModifiedModal showDialog={showDialog} closeDialog={closeDialog} labelledBy={label}>
      <h2 id={label}>Cart</h2>
      <button onClick={handleCheckout}>
        Checkout
      </button>
      <CartItemsList cart={Object.values(cartDetails)} /> 
      <p>Total: {formatPrice(totalPrice, 'USD')}</p>
    </ModifiedModal>
  )
}

const ModifiedModal = styled(Modal)`
  height: 100vh;
  background: red;
`

CartModal.propTypes = {
  showDialog: PropTypes.bool.isRequired,
  closeDialog: PropTypes.func.isRequired,
}

export default CartModal