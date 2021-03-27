import React from "react"
import Modal from "./modal"
import ProductDetails from "./productDetails"
import { useShoppingCart } from 'use-shopping-cart'

import "@reach/dialog/styles.css"

const ProductModal = ({ showDialog, closeDialog, product }) => {
  const label = `label__${product.product_id}`
  const { addItem } = useShoppingCart()
  const handleAddItem = () => addItem(product)

  return (
    <Modal showDialog={showDialog} closeDialog={closeDialog} labelledBy={label}>
      <ProductDetails {...product} labelId={label} />
      <button onClick={handleAddItem}>
        Add To Cart
      </button>
    </Modal>
  )
}

export default ProductModal
