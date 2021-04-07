import React, { useState } from "react"
import styled from "styled-components"
import { spacing } from "../utils/helpers"

const SuccessForm = () => {
  const [email, setEmail] = useState("")

  const handleChange = e => setEmail(e.target.value)

  return (
    <Form>
      <h4>Sign up to our newsletter for product updates!</h4>
      <input value={email} onChange={handleChange} />
      <button>Sign me up!</button>
    </Form>
  )
}

const Form = styled.form`
  margin: 0 ${spacing(3)};
  padding: ${spacing(3)};
  background-color: hsl(3deg, 0%, 90%);
  border-radius: 5px;
`

export default SuccessForm
