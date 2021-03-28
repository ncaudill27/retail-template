import React from "react"
import PropTypes from  'prop-types'
import Modal from "./modal"
import ProductDetails from "./productDetails"
import { useShoppingCart } from 'use-shopping-cart'

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
    <Modal showDialog={showDialog} closeDialog={closeDialog} labelledBy={label}>
      <ProductDetails {...product} labelId={label} />
      <button onClick={handleAddItem}>
        Add To Cart
      </button>
    </Modal>
  )
}

ProductModal.propTypes = {
  showDialog: PropTypes.bool.isRequired,
  closeDialog: PropTypes.func.isRequired,
  showCart: PropTypes.func.isRequired,
}

ProductModal.defaultProps = {
  product: {}
}

export default ProductModal
