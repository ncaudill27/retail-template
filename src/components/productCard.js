import React, { useState, useRef, useEffect } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { formatPrice, spacing } from "../utils/helpers"

const ProductCard = ({
  id,
  active,
  currency,
  unit_amount: price,
  handleProductView,
  product: { id: product_id, name, image, description },
}) => {
  // TODO add product transformer abstraction
  const gatsbyImage = getImage(image.find(Boolean))

  const flatProduct = {
    name,
    id,
    price,
    image,
    currency,
    active,
    product_id,
    description,
    gatsbyImage,
  }

  const imageEl = useRef()
  const copyEl = useRef()
  const [gridRowEnd, setGridRowEnd] = useState(`span 21`)

  useEffect(() => {
    const imgHeight = imageEl.current.getBoundingClientRect().height
    const copyHeight = copyEl.current.getBoundingClientRect().height
    const rowEnd = Math.floor(imgHeight / 20 + copyHeight / 20 + 2)
    setGridRowEnd(`span ${rowEnd}`)
  }, [imageEl, copyEl]) //TODO add useWidth hook to dependencies
  // useWidth hook allows for element to be properly placed after window resizing
  // e.g. when a phone gets turned sideways

  return (
    <StyledCard span={gridRowEnd} onClick={handleProductView(flatProduct)}>
      <ImgWrapper ref={imageEl}>
        <GatsbyImage image={gatsbyImage} alt={description} />
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
  grid-row-end: ${p => p.span};
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
