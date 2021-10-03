import React from "react"
import styled from "styled-components"

const SideScrollButton = props => <Wrapper {...props} />

const Wrapper = styled.button`
  height: 100%;
  width: auto;

  padding: var(--spacing-1);
  padding-left: 18px;

  background: var(--color-primary-muted);
  border: 2px solid var(--color-background);
  border-radius: 50%;
`

export default SideScrollButton
