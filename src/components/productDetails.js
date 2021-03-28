import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { formatPrice } from "../utils/helpers"

const ProductDetails = ({
  name,
  price,
  labelId,
  currency,
  description,
  gatsbyImage,
}) => {
  return (
    <RootWrapper>
      <div>
        <h2 id={labelId}>{name}</h2>
        <p>{formatPrice(price, currency)}</p>
        <p>{description}</p>
      </div>
      <ImgWrapper>
        <GatsbyImage image={gatsbyImage} alt={description} />
      </ImgWrapper>
    </RootWrapper>
  )
}

const RootWrapper = styled.div`
  display: flex;
`

const ImgWrapper = styled.div`
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
`

export default ProductDetails
