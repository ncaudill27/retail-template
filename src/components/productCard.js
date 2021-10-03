import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { formatPrice } from "../utils/helpers"

import { RootWrapper } from './featureSection'

const ProductCard = product => {
  const {
    name,
    price,
    currency,
    description,
    displayedImages,
    handleProductView,
  } = product

  console.log(displayedImages.find(Boolean));
  
  return (
    <StyledCard onClick={handleProductView(product)}>
      <ImgWrapper>
        <GatsbyImage
          image={displayedImages.find(Boolean)}
          alt={description}
          style={{ width: '100%', height: 'auto'}}
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
`

const ImgWrapper = styled.div`
  /* width: 312px;
  max-width: 312px; */
  height: 400px;
  overflow: hidden;

  ${RootWrapper} & {
    width: 400px;
    max-height: 590px;
    height: 590px;
  }
`

const CopyWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: var(--spacing-1);
  font-family: var(--font-family-secondary);
  font-size: 1em;
  font-weight: var(--font-weight-regular);
`

const CardTitle = styled.h6`
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
`

const CardPrice = styled.h6`
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
`

export default ProductCard
