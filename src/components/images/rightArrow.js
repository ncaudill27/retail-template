import React from "react"

import RightArrow from "../../images/svg/right-arrow.svg"
import SideScrollButton from "../sideScrollButton"

const Arrow = props => (
  <SideScrollButton {...props}>
    <RightArrow height="100%" width="100%" />
  </SideScrollButton>
)

export default Arrow
