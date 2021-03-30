import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { useShoppingCart } from "use-shopping-cart"
import { formatPrice, spacing } from "../utils/helpers"

import Portal from "@reach/portal"
import Dialog from "@reach/dialog"
import CartItemsList from "./cartItemList"

const CartModal = ({ showDialog, closeDialog }) => {
  const label = "cart__random-id-number"
  const {
    cartDetails,
    totalPrice,
    cartCount,
    redirectToCheckout,
  } = useShoppingCart()

  const handleCheckout = async e => {
    e.preventDefault()

    if (cartCount > 0) {
      const error = await redirectToCheckout()
      if (error) console.warn("Error bro")
    } else {
      // handle not enough item logging and shit
    }
  }

  return (
    <Portal>
      <StyledDialog
        isOpen={showDialog}
        onDismiss={closeDialog}
        aria-labelledby={label}
      >
        <CartHeader id={label}>Your Cart</CartHeader>
        <CartItemsList cart={Object.values(cartDetails)} />
        <p>Total: {formatPrice(totalPrice, "USD")}</p>
        <CheckoutButton onClick={handleCheckout}>Checkout</CheckoutButton>
      </StyledDialog>
    </Portal>
  )
}

const StyledDialog = styled(Dialog)`
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: ${spacing(12)} auto;
  padding: ${spacing(2)};
  background-color: white;
`

const CartHeader = styled.h3`
  text-align: center;
  margin: 0;
`

const CheckoutButton = styled.button`
  outline: none;
  border: none;
  width: calc(100% + ${spacing(5)});
  margin-left: -${spacing(2)};
  margin-bottom: -${spacing(2)};
  padding: ${spacing(4)};
  color: black;
  text-transform: uppercase;
  background: ${p => p.theme.colors.secondary.light};
`

CartModal.propTypes = {
  showDialog: PropTypes.bool.isRequired,
  closeDialog: PropTypes.func.isRequired,
}

export default CartModal
