import React from "react"
import styled from "styled-components"
import Portal from "@reach/portal"
import { useShoppingCart } from "use-shopping-cart"

import CartImage from "../images/svg/shopping-cart.svg"

const CartPortal = ({ showCart }) => {
  const { cartCount } = useShoppingCart()

  return (
    <Portal>
      <Wrapper onClick={showCart}>
        <CartImage style={{ width: "40px", height: "40px", }} />
        <CountWrapper>
          <Count>
            {cartCount}
          </Count>
        </CountWrapper>
      </Wrapper>
    </Portal>
  )
}

const Wrapper = styled.div`
  position: absolute;
  top: var(--spacing-2);
  right: var(--spacing-10);
  padding: var(--spacing-0);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--spacing-0);
  background-color: var(--color-primary);
  border-radius: 10px;
`

const CountWrapper = styled.div`
  font-weight: bold;
  text-align: center;
`

const Count = styled.span`
  
`;

export default CartPortal
