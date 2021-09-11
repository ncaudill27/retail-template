import React, { useRef } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { formatPrice, spacing } from "../utils/helpers"
import useRefDimensions from "../hooks/useRefDimensions"
import useDerivedRowEnd from "../hooks/useDerivedRowEnd"

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
    <StyledCard
      onClick={handleProductView(product)}
    >
      <ImgWrapper>
        <GatsbyImage image={displayedImages.find(Boolean)} alt={description} style={{maxHeight: 400}} />
      </ImgWrapper>
      <CopyWrapper>
        <CardTitle>{name}</CardTitle>
        <CardPrice>{formatPrice(price, currency)}</CardPrice>
      </CopyWrapper>
    </StyledCard>
  )
}

const StyledCard = styled.div`
  width: 100%;
  height: 100%;
  grid-row-end: var(--grid-row-end);
`

const ImgWrapper = styled.div`
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
`

const CopyWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: var(--spacing-1)
  font-size: 18px;
`

const CardTitle = styled.h5`
  margin: 0 0 0.5rem;
`

const CardPrice = styled.h5`
  margin: 0;
`

export default ProductCard
