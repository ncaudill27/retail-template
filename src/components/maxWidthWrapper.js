import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const MaxWidthWrapper = ({ width = 960, children, large, ...props }) => (
  <Wrapper style={{
    "--width": width + "px",
    "--large-width": (large ? large : width) + "px"
  }} {...props}>
    {children}
  </Wrapper>
)

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: var(--width);
  width: 100%;

  @media (min-width: 1200px) {
    max-width: var(--large-width);
  }
  
`
Wrapper.propTypes = {
  width: PropTypes.number,
}

export default MaxWidthWrapper
