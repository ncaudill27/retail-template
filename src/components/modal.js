import React from "react"
import PropTypes from 'prop-types'
import styled from "styled-components"
import Portal from "@reach/portal"
import Dialog from "@reach/dialog"
import { spacing } from "../utils/helpers"

import "@reach/dialog/styles.css"

const Modal = ({ showDialog, closeDialog, labelledBy, children }) => {


  return (
    <Portal>
      <StyledDialog isOpen={showDialog} onDismiss={closeDialog} aria-labelledby={labelledBy}>
        <button onClick={closeDialog}>X</button>
        {children}
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

Modal.propTypes = {
  showDialog: PropTypes.bool.isRequired,
  closeDialog: PropTypes.func.isRequired,
  labelledBy: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default Modal
