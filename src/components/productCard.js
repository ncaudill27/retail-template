import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { formatPrice } from "../utils/helpers"

const ProductCard = product => {
  const {
    name,
    price,
    currency,
    description,
    displayedImages,
    handleProductView,
  } = product

  return (
    <StyledCard onClick={handleProductView(product)}>
      <ImgWrapper>
        <GatsbyImage
          image={displayedImages.find(Boolean)}
          alt={description}
          style={{ maxHeight: 400 }}
        />
      </ImgWrapper>
      <CopyWrapper>
        <CardTitle>{name}</CardTitle>
        <CardPrice>{formatPrice(price, currency)}</CardPrice>
      </CopyWrapper>
    </StyledCard>
  )
}

const StyledCard = styled.article`
  width: 100%;
  height: 100%;
  grid-row-end: var(--grid-row-end);
`

const ImgWrapper = styled.div``

const CopyWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: var(--spacing-1);
`

const CardTitle = styled.h6``

const CardPrice = styled.h6`
  font-family: var(--font-family-primary);
`

export default ProductCard
