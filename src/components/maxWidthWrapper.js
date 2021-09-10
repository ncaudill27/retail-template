import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const MaxWidthWrapper = ({ width = 960, children, ...props }) => (
  <Wrapper style={{ "--width": width + "px" }} {...props}>
    {children}
  </Wrapper>
)

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: var(--width);
  width: 100%;
`
Wrapper.propTypes = {
  width: PropTypes.number,
}

export default MaxWidthWrapper
