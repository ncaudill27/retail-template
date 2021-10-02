import React from "react"
import styled from "styled-components"

import CloseIcon from "../../images/svg/cancel.svg"

const Close = props => (
  <Wrapper {...props} role="button">
    <CloseIcon
      attribution="https://www.flaticon.com/authors/xnimrodx"
      height="100%"
      width="100%"
    />
  </Wrapper>
)

const Wrapper = styled.button`
  position: fixed;
  top: var(--spacing-1);
  right: var(--spacing-1);

  padding: var(--spacing-0);
  height: 45px;
  width: 45px;

  background-color: inherit;
  border: none;

  z-index: 1;

  @media (min-width: 600px) {
    height: 40px;
    width: 40px;
    top: var(--spacing-3);
    right: var(--spacing-3);
  }
`

export default Close
