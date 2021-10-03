import React from "react"
import styled from "styled-components"

import RightArrow from "../../images/svg/right-arrow.svg"
import SideScrollButton from "../sideScrollButton"

const Arrow = props => (
  <Wrapper {...props}>
    <RightArrow height="100%" width="100%" />
  </Wrapper>
)

const Wrapper = styled(SideScrollButton)`
  transform: rotate(180deg);
`

export default Arrow
