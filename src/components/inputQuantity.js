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
      <Input value={quantity} readOnly disabled={loading} />
      <Button onClick={handleIncrement(id)} disabled={loading}>
        &#43;
      </Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  background-color: var(--color-primary-muted);
  & > * {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const Button = styled.button`
  outline: none;
  border: none;
  background-color: inherit;
`

const Input = styled.input`
  outline: none;
  border: none;
  text-align: center;
  background-color: inherit;
`

export default InputQuantity
