import React from "react"
import styled, { css } from "styled-components"

import RightArrow from "../../images/svg/right-arrow.svg"
import SideScrollButton from "../sideScrollButton"

const Arrow = props => (
  <Wrapper {...props}>
    {props.scrollLeft > 0 && <RightArrow height="100%" width="100%" />}
  </Wrapper>
)

const Wrapper = styled(SideScrollButton)`
  transform: rotate(180deg);

  ${props =>
    props.scrollLeft <= 0 &&
    css`
      border: none;
      height: 0;
      width: 0;
      padding: 0;
    `};
`

export default Arrow
