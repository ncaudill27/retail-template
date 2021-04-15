import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { useShoppingCart } from "use-shopping-cart"
import { spacing } from "../utils/helpers"

import Dialog from "@reach/dialog"
import ProductDetails from "./productDetails"
import BackArrow from "./backArrow"

import "@reach/dialog/styles.css"

const ProductModal = ({ showDialog, closeDialog, product, showCart }) => {
  const label = `label__${product.product_id}`
  const { addItem } = useShoppingCart()
  const handleAddItem = async () => {
    await addItem(product)
    await closeDialog()
    showCart()
  }

  return (
    <StyledDialog
      isOpen={showDialog}
      onDismiss={closeDialog}
      aria-labelledby={label}
    >
      <BackArrow onClick={closeDialog} />
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
  background-color: white;
`

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: ${spacing(0)};
  width: 100%;
  padding: ${spacing(2)};
`

const AddToCartBtn = styled.button`
  width: 100%;
  outline: none;
  border: none;
  padding: ${spacing(1)};
  background: black;
  color: white;
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
