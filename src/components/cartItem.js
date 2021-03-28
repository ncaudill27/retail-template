import React from 'react'
import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'
import { formatPrice } from '../utils/helpers'

const CartItem = ({name, quantity, price, description, gatsbyImage, formattedValue}) => (
  <StyledCartItem>
    <ImgWrapper>
      <GatsbyImage image={gatsbyImage} alt={description} />
    </ImgWrapper>
    <h3>{name}</h3>
    <p>{quantity}</p>
    <p>{formatPrice(price)}</p>
    <p>{formattedValue}</p>
  </StyledCartItem>
)

const StyledCartItem = styled.div`
  height: 200px;
  display: flex;
`

const ImgWrapper = styled.div`
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
`

export default CartItem