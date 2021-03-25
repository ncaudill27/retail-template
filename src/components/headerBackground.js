import React from 'react'
import styled from 'styled-components'
import HeaderImage from '../images/svg/header-background.svg'

const HeaderBackground = ({children}) => (
  <Wrapper>
    <HeaderImage />
  </Wrapper>
)

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-width: 100%;
`

export default HeaderBackground