import React from 'react'
import PropTypes from 'prop-types'
import { useShoppingCart } from 'use-shopping-cart'
import { formatPrice } from '../utils/helpers'

import Modal from './modal'

const CartModal = ({showDialog, closeDialog}) => {
  const label = 'cart__random-id-number'
  const { cartDetails, shouldDisplayCart, totalPrice } = useShoppingCart()

  console.log(cartDetails, shouldDisplayCart)
  return (
    <Modal showDialog={showDialog} closeDialog={closeDialog} labelledBy={label}>
      <h2 id={label}>Cart</h2>
      {cartDetails.length > 0 && cartDetails.map(item => {
        return Object.values(item)
      })}
      <p>Total: {formatPrice(totalPrice, 'USD')}</p>
    </Modal>
  )
}

CartModal.propTypes = {
  showDialog: PropTypes.func.isRequired,
  closeDialog: PropTypes.func.isRequired,
}

export default CartModal