import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const SuccessMessage = ({ totalAmount }) => (
  <Card>
    <h3>Success Test</h3>
    <p>Total: {totalAmount}</p>
  </Card>
)

const Card = styled.div`
  background: black;
  color: white;
`

export default SuccessMessage
