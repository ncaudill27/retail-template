import React from "react"
import styled from "styled-components"

import RightArrow from "../../images/svg/right-arrow.svg"

const Arrow = props => (
  <Wrapper {...props}>
    <RightArrow height="100%" width="100%" />
  </Wrapper>
)

const Wrapper = styled.button`

  height: 100%;
  width: auto;

  padding: var(--spacing-2);
  padding-left: 27px;

  background: var(--color-primary-muted);
  border: none;
  border-radius: 50%;

  transform: rotate(180deg);
`

export default Arrow
