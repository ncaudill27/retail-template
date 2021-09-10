import React from "react"
import styled from "styled-components"

import LeftArrow from "../images/svg/left-arrow.svg"

const BackArrow = props => (
  <BackWrapper {...props} role="button">
    <LeftArrow height="50" width="50" />
  </BackWrapper>
)

const BackWrapper = styled.div`
  position: absolute;
  display: flex;
  top: var(--spacing-0);
  left: var(--spacing-0);
  z-index: 1;
`

export default BackArrow
