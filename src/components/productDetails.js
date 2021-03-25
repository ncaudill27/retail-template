import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { formatPrice, spacing } from '../utils/helpers'

const ProductDetails = ({
  name,
  image,
  currency,
  description,
  unit_amount,
}) => {
  return (
    <>
      <h2>{name}</h2>
      <p>{formatPrice(unit_amount, currency)}</p>
      <ImgWrapper>
        <GatsbyImage image={image} alt={description} />
      </ImgWrapper>
      <p>{description}</p>
    </>
  )
}

const ImgWrapper = styled.div`
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
`

const CopyWrapper = styled.div`
  padding: ${spacing(0)};
  padding-bottom: 0;
`

export default ProductDetails