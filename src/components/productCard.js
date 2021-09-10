import React, { useRef } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { formatPrice, spacing } from "../utils/helpers"
import useRefDimensions from '../hooks/useRefDimensions'
import useDerivedRowEnd from '../hooks/useDerivedRowEnd'

const ProductCard = product => {
  const {
    name,
    price,
    currency,
    description,
    displayedImages,
    handleProductView,
  } = product
  const imageEl = useRef()
  const copyEl = useRef()
  
  const { height: imgHeight } = useRefDimensions(imageEl)
  const { height: copyHeight } = useRefDimensions(copyEl)
  
  const gridRowEnd = useDerivedRowEnd({imgHeight, copyHeight})

  return (
    <StyledCard
      style={{ "--grid-row-end": gridRowEnd }}
      onClick={handleProductView(product)}
    >
      <ImgWrapper ref={imageEl}>
        <GatsbyImage image={displayedImages.find(Boolean)} alt={description} />
      </ImgWrapper>
      <CopyWrapper ref={copyEl}>
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
  padding: ${spacing(0)};
  padding-bottom: 0;
`

const CardTitle = styled.h2`
  margin: 0 0 0.5rem;
`

const CardPrice = styled.p`
  margin: 0;
`

export default ProductCard
