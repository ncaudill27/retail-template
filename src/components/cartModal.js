import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { useShoppingCart } from "use-shopping-cart"
import { formatPrice, spacing } from "../utils/helpers"

import Dialog from "@reach/dialog"
import BackArrow from "./backArrow"
import CartItemsList from "./cartItemList"
import CartSpacer from "./cartSpacer"

const CartModal = ({ showDialog, closeDialog }) => {
  // aria-labelledby generator
  const label = "cart__random-id-number"
  const {
    cartDetails,
    totalPrice,
    cartCount,
    redirectToCheckout,
  } = useShoppingCart()

  // handles sending of information to Stripe Checkout API using use-shopping-cart helper
  const handleCheckout = async e => {
    e.preventDefault()

    if (cartCount > 0) {
      const error = await redirectToCheckout()
      // TODO handle errors more neatly
      // possibly using an "error" state to manage screen popup
      // or simply use CartProvider cancelUrl functionality from use-shopping-cart
      if (error) console.warn("Error bro")
    } else {
      // handle not enough item logging and shit
    }
  }

  return (
    <StyledDialog
      isOpen={showDialog}
      onDismiss={closeDialog}
      aria-labelledby={label}
    >
      <BackArrow onClick={closeDialog} />
      <CartHeader id={label}>Your Cart</CartHeader>
      <CartItemsList cart={Object.values(cartDetails)} />
      <CartSpacer size={3} />
      <SubTotal>
        <h4>Sub-total</h4>
        <p>{formatPrice(totalPrice, "USD")}</p>
      </SubTotal>
      <CheckoutButton onClick={handleCheckout}>Checkout</CheckoutButton>
    </StyledDialog>
  )
}

const StyledDialog = styled(Dialog)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  margin: auto;
  height: 100vh;
  width: 100%;
  padding: 0;
  background-color: white;
  overflow-y: scroll;
`

const CartHeader = styled.h3`
  text-align: center;
  margin: 0;
  padding-top: ${spacing(2)};
`

const SubTotal = styled.div`
  text-align: center;
  padding-bottom: ${spacing(3)};

  h4 {
    text-decoration: underline;
    margin-bottom: 0.75em;
  }

  p {
    margin: 0;
  }
`

const CheckoutButton = styled.button`
  outline: none;
  border: none;
  width: 100%;
  padding: ${spacing(4)};
  color: black;
  text-transform: uppercase;
  background: ${p => p.theme.colors.secondary.light};
`

CartModal.propTypes = {
  showDialog: PropTypes.bool.isRequired,
  closeDialog: PropTypes.func.isRequired,
}

CartModal.defaultProps = {
  showDialog: false,
}

export default CartModal
