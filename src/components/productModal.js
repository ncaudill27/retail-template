import React from 'react'
import styled from 'styled-components'
import Portal from "@reach/portal";
import Dialog from '@reach/dialog'
import { spacing } from '../utils/helpers'

const ProductModal = ({isOpen, onDismiss}) => {

  return (
    <Dialog isOpen={isOpen} onDismiss={onDismiss}>
      <Portal>
        <PortalWrapper>
          <h2>Test Title</h2>
          <p>This is test information to see how the component will render</p>
        </PortalWrapper>
      </Portal>
    </Dialog>
  )
}

const PortalWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  padding: ${spacing(2)};
`

export default ProductModal