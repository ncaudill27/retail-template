import React from "react"
import styled from "styled-components"
import Portal from "@reach/portal"
import Dialog from "@reach/dialog"
import { spacing } from "../utils/helpers"

const ProductModal = ({ showDialog, onDismiss }) => {
  return (
    <Portal>
      <Dialog isOpen={showDialog} onDismiss={onDismiss}>
        <PortalWrapper>
          <button onClick={onDismiss}>
            X
          </button>
          <h2>Test Title</h2>
          <p>This is test information to see how the component will render</p>
        </PortalWrapper>
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
