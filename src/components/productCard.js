import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import { formatPrice, spacing } from "../utils/helpers"

const ProductCard = ({
  currency,
  unit_amount,
  product: { name, images, description },
}) => {

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
    <StyledCard span={gridRowEnd}>
      <ImgWrapper ref={imageEl}>
        <img src={images.find(Boolean)} alt={description} />
      </ImgWrapper>
      <CopyWrapper ref={copyEl}>
        <CardTitle>{name}</CardTitle>
        <CardPrice>{formatPrice(unit_amount, currency)}</CardPrice>
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
  margin: 0 auto;
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
