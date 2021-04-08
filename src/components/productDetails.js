import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { formatPrice, spacing } from "../utils/helpers"

const ProductDetails = ({
  name,
  price,
  labelId,
  currency,
  description,
  gatsbyImage,
}) => {
  return (
    <>
      <ImgWrapper>
        <GatsbyImage image={gatsbyImage} alt={description} />
      </ImgWrapper>
      <DetailWrapper>
        <h2 id={labelId}>{name}</h2>
        <p>{description}</p>
        <p>{formatPrice(price, currency)}</p>
      </DetailWrapper>
    </>
  )
}

const ImgWrapper = styled.div`
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
`

const DetailWrapper = styled.div`
  position: relative;
  top: -${spacing(2)};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: ${spacing(2)};
  background-color: white;
`

export default ProductDetails
