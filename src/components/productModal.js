import React from "react"
import styled from "styled-components"
import Portal from "@reach/portal"
import { DialogOverlay, DialogContent } from "@reach/dialog"
import { spacing } from "../utils/helpers"
import ProductDetails from "./productDetails"

import "@reach/dialog/styles.css"

const ProductModal = ({ showDialog, closeDialog, product }) => (
  <Portal>
    <DialogOverlay isOpen={showDialog} onDismiss={closeDialog}>
      <StyledDialog>
        <button onClick={closeDialog}>X</button>
        <ProductDetails {...product} />
      </StyledDialog>
    </DialogOverlay>
  </Portal>
)

// &:nth-child(8) > div:nth-child(3) > div > div

const StyledDialog = styled(DialogContent)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  padding: ${spacing(2)};
  width: 700px;
  height: 500px;
  background-color: white;
  border: 3px solid;
`

export default ProductModal
