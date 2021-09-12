import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { useShoppingCart } from "use-shopping-cart"

import Dialog from "@reach/dialog"
import ProductDetails from "./productDetails"
import Close from "./images/close"

import "@reach/dialog/styles.css"

const ProductModal = ({ showDialog, closeDialog, product, showCart }) => {
  // aria-labelledby derived from product_id
  const label = `label__${product.product_id}`

  const { addItem } = useShoppingCart()
  const handleAddItem = async () => {
    // add item to cart
    await addItem(product)
    // close current product dialog
    await closeDialog()
    // open cart dialog
    showCart()
  }

  return (
    <StyledDialog
      isOpen={showDialog}
      onDismiss={closeDialog}
      aria-labelledby={label}
    >
      <Close onClick={closeDialog} />
      <ProductDetails {...product} labelId={label} />
      <ButtonWrapper>
        <AddToCartBtn onClick={handleAddItem}>Add To Cart</AddToCartBtn>
      </ButtonWrapper>
    </StyledDialog>
  )
}

const StyledDialog = styled(Dialog)`
  position: relative;
  top: 0;
  right: 0;
  left: 0;
  margin: auto;
  height: 100vh;
  width: 100%;
  padding: 0;
`

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: var(--spacing-0);
  width: 100%;
  padding: var(--spacing-2);
`

const AddToCartBtn = styled.button`
  width: 100%;
  outline: none;
  border: none;
  padding: var(--spacing-1);
  background-color: var(--color-primary);
  font-family: var(--font-family-secondary);
  color: var(--color-background);
  text-transform: uppercase;
`

ProductModal.propTypes = {
  showDialog: PropTypes.bool.isRequired,
  closeDialog: PropTypes.func.isRequired,
  showCart: PropTypes.func.isRequired,
}

ProductModal.defaultProps = {
  product: {},
}

export default ProductModal
