import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { useShoppingCart } from "use-shopping-cart"
import { spacing } from "../utils/helpers"

import Portal from "@reach/portal"
import Dialog from "@reach/dialog"
import ProductDetails from "./productDetails"

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
        <ProductDetails {...product} labelId={label} />
        <button onClick={handleAddItem}>Add To Cart</button>
      </StyledDialog>
    </Portal>
  )
}

const StyledDialog = styled(Dialog)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 60vh;
  padding: ${spacing(2)};
  background-color: white;
  border: 3px solid;
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
