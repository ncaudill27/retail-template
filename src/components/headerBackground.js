import React from "react"
import styled from "styled-components"
import HeaderImage from "../images/svg/header-background.svg"

const HeaderBackground = () => (
  <StyledBackground>
    <Wrapper>
      <HeaderImage style={{ height: "100%" }} />
    </Wrapper>
  </StyledBackground>
)

const StyledBackground = styled.div`
  display: block;
  height: 100%;
  min-height: 190px;
`

const Wrapper = styled.div`
  display: flex;
  width: auto;
  height: 100%;
  min-height: 190px;
  align-items: flex-start;
`

export default HeaderBackground
