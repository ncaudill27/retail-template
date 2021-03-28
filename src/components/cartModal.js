import React from 'react'
import PropTypes from 'prop-types'
import { useShoppingCart } from 'use-shopping-cart'

import Modal from './modal'

const CartModal = ({showDialog, closeDialog}) => {
  const label = 'cart__random-id-number'
  const { cartDetails } = useShoppingCart()

  return (
    <Modal showDialog={showDialog} closeDialog={closeDialog} labelledBy={label}>
      {cartDetails}
    </Modal>
  )
}

CartModal.propTypes = {
  showDialog: PropTypes.func.isRequired,
  closeDialog: PropTypes.func.isRequired,
}

export default CartModal