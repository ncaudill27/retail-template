import React from "react"
import Modal from './modal'
import ProductDetails from "./productDetails"

import "@reach/dialog/styles.css"

const ProductModal = ({ showDialog, closeDialog, product }) => {
  const label = `label__${product.productId}`
  
  return (
    <Modal showDialog={showDialog} closeDialog={closeDialog} labelledBy={label}>
      <ProductDetails {...product} labelId={label} />
    </Modal>
  )
}

export default ProductModal
