import React, { useState } from "react"
import styled from "styled-components"
import { useShoppingCart } from "use-shopping-cart"

const InputQuantity = ({ id, quantity }) => {
  const { incrementItem, decrementItem, removeItem } = useShoppingCart()

  // loading state to account for when async calls to inventory are made
  const [loading, setLoading] = useState(false)

  const handleIncrement = id => async e => {
    await setLoading(true)
    // TODO hit inventory database to check available stock
    await incrementItem(id)
    setLoading(false)
  }

  const handleDecrement = id => async e => {
    await setLoading(true)

    if (quantity <= 1) {
      // remove item and escape function to avoid memory leak
      // TODO hit inventory database to modify
      removeItem(id)
      return
    } else {
      await decrementItem(id)
    }

    setLoading(false)
  }

  return (
    <Wrapper>
      <Button onClick={handleDecrement(id)} disabled={loading}>
        &#45;
      </Button>
      <Input value={quantity} readOnly disabled={loading} tabIndex={-1} />
      <Button onClick={handleIncrement(id)} disabled={loading}>
        &#43;
      </Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  isolation: isolate;
  
  display: flex;
  background-color: var(--color-primary-muted);
  min-width: 68.25px;
  & > * {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const Button = styled.button`
  border: none;
  background-color: inherit;
`

const Input = styled.input`
  position: relative;
  z-index: 1;

  outline: none;
  border: none;
  text-align: center;
  background-color: inherit;
`

export default InputQuantity
