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

const Wrapper = styled.div`
  height: 40px;
  width: 40px;
  position: absolute;
  top: var(--spacing-1);
  right: var(--spacing-1);

  @media (min-width: 600px) {
    height: 30px;
    width: 30px;
    top: var(--spacing-3);
    right: var(--spacing-3);
  }
`

export default Close
