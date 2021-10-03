import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { useShoppingCart } from "use-shopping-cart"
import { formatPrice } from "../utils/helpers"

import Dialog from "@reach/dialog"
import Close from "./images/close"
import Heading from "./typography/headingTer"
import CartItemsList from "./cartItemList"

import "@reach/dialog/styles.css"

const CartModal = ({ showDialog, closeDialog }) => {
  // aria-labelledby generator
  const label = "cart__random-id-number" //todo generate random id
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
      <Close onClick={closeDialog} />
      <TopWrapper>
        <CartHeader id={label}>Cart</CartHeader>
        <CartItemsList cart={Object.values(cartDetails)} />
      </TopWrapper>
      <BottomWrapper>
        <SubTotal>
          <h4>Sub-total</h4>
          <p>{formatPrice(totalPrice, "USD")}</p>
        </SubTotal>
        <CheckoutButton onClick={handleCheckout}>Checkout</CheckoutButton>
      </BottomWrapper>
    </StyledDialog>
  )
}

const StyledDialog = styled(Dialog)`
  position: fixed;
  top: 0;
  right: 0;
  margin: auto;
  height: 100vh;
  width: 100%;
  padding: var(--spacing-1);
  background-color: var(--color-background);

  isolation: isolate;

  @media (min-width: 600px) {
    width: 600px;
    padding: var(--spacing-3);
  }
`

const CartHeader = styled(Heading)`
  padding-top: var(--spacing-1);
  padding-bottom: var(--spacing-1);
`

const TopWrapper = styled.div`
  width: 100%;
  height: calc(100% - 176px);
  padding: inherit;

  position: absolute;
  top: 0;
  left: 0;

  overflow-y: scroll;
`
const BottomWrapper = styled.div`
  width: 100%;

  position: fixed;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`

const SubTotal = styled.div`
  padding-top: var(--spacing-2);
  padding-bottom: var(--spacing-2);
  padding-left: var(--spacing-1);
  padding-right: var(--spacing-1);
  display: flex;
  justify-content: space-between;
  background-color: var(--color-background);

  @media (min-width: 600px) {
    padding-left: var(--spacing-3);
    padding-right: var(--spacing-3);
  }
`

const CheckoutButton = styled.button`
  border: none;
  width: 100%;
  height: 104px;
  padding: var(--spacing-4);
  color: black;
  text-transform: uppercase;
  background: var(--color-primary);
`

CartModal.propTypes = {
  showDialog: PropTypes.bool.isRequired,
  closeDialog: PropTypes.func.isRequired,
}

CartModal.defaultProps = {
  showDialog: false,
}

export default CartModal
