import React from "react"
import PropTypes from  'prop-types'
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

ProductModal.propTypes = {
  showDialog: PropTypes.func.isRequired,
  closeDialog: PropTypes.func.isRequired,
}

ProductModal.defaultProps = {
  product: {}
}

export default ProductModal
