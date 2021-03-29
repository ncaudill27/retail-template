import React from 'react'
import styled from 'styled-components'
import Portal from '@reach/portal'
import { useShoppingCart } from 'use-shopping-cart'

import CartImage from '../images/svg/shopping-cart.svg'

const CartPortal = ({showCart}) => {
  const { cartCount } = useShoppingCart()
  
  return (
    <Portal>
      <Wrapper onClick={showCart}>
        <CartImage style={{width: '40px', height: '40px'}} />
        <Count>{cartCount}</Count>
      </Wrapper>
    </Portal>
  )
}

const Wrapper = styled.div`
  position: absolute;
  top: 32px;
  right: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
`

const Count = styled.p`
  display: block;
  height: 100%;
  margin: 0;
`

export default CartPortal