import React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

const CartItem = ({
  name,
  quantity,
  price,
  description,
  gatsbyImage,
  formattedValue,
}) => (
  <StyledCartItem>
    <GatsbyImage
      style={{ maxHeight: "140px" }}
      image={gatsbyImage}
      alt={description}
    />
    <h3>{name}</h3>
    <p>{quantity}</p>
    <p>{formattedValue}</p>
  </StyledCartItem>
)

const StyledCartItem = styled.div`
  display: grid;
  grid-template-columns: 200px 200px repeat(3, 1fr);
  gap: 8px;
`

export default CartItem
