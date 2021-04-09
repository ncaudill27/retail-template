import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { useShoppingCart } from "use-shopping-cart"
import { spacing } from "../utils/helpers"

import Portal from "@reach/portal"
import Dialog from "@reach/dialog"
import ProductDetails from "./productDetails"
import LeftArrow from '../images/svg/left-arrow.svg'

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
    <Portal>
      <StyledDialog
        isOpen={showDialog}
        onDismiss={closeDialog}
        aria-labelledby={label}
      >
        <BackWrapper role='button' onClick={closeDialog}>
          <LeftArrow height='50' width='50' />
        </BackWrapper>
        <ProductDetails {...product} labelId={label} />
        <ButtonWrapper>
          <AddToCartBtn onClick={handleAddItem}>Add To Cart</AddToCartBtn>
        </ButtonWrapper>
      </StyledDialog>
    </Portal>
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
`

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: ${spacing(1)};
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

const BackWrapper = styled.div`
  position: fixed;
  display: flex;
  top: ${spacing(1)};
  left: ${spacing(1)};
  z-index: 1;
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
