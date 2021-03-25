import React from "react"
import styled from "styled-components"
import Portal from "@reach/portal"
import Dialog from "@reach/dialog"
import { spacing } from "../utils/helpers"
import ProductDetails from './productDetails' 

import "@reach/dialog/styles.css";

const ProductModal = ({ showDialog, closeDialog, product }) => {
  console.log(product)
  return (
    <Portal>
      <Dialog isOpen={showDialog} onDismiss={closeDialog}>
        <button onClick={closeDialog}>X</button>
        <ProductDetails {...product} />
      </Dialog>
    </Portal>
  )
}

const PortalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  padding: ${spacing(2)};
  width: 300px;
  height: 300px;
  background-color: white;
  border: 3px solid;
`

export default ProductModal
