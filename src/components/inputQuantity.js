import React, { useState } from "react"
import styled from "styled-components"
import { incrementItem, decrementItem } from "use-shopping-cart"

const InputQuantity = ({ id, quantity }) => {
  const [loading, setLoading] = useState(false)

  const handleIncrement = id => async e => {
    await setLoading(true)
    await incrementItem(id)
    setLoading(false)
  }

  const handleDecrement = async e => {
    console.log(id)
    await setLoading(true)
    await decrementItem(id)
    setLoading(false)
  }

  return (
    <Wrapper>
      <Button onClick={handleDecrement} disabled={loading}>
        &#45;
      </Button>
      <Input value={quantity} readOnly disabled={loading} />
      <Button onClick={handleIncrement} disabled={loading}>
        &#43;
      </Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  width: 153px;
  height: 50px;

  & > * {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const Button = styled.button`
  outline: none;
  border: none;
  background: white;
`

const Input = styled.input`
  outline: none;
  border: none;
  background: white;
  text-align: center;
`

export default InputQuantity
