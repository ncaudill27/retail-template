import React, { useState, useRef, useEffect } from "react"
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'

const ProductCard = (props) => {
  const {
    currency,
    unit_amount,
    product: {
      name,
      images,
      description
    }
  } = props

  const imageEl = useRef()
  const [gridRowEnd, setGridRowEnd] = useState(`span 10`)

  useEffect(() => {
      const height = imageEl.current.getBoundingClientRect().height
      const rowEnd = Math.floor((height / 20) + 5)
      setGridRowEnd(`span ${rowEnd}`)
  }, [imageEl]) //TODO add useWidth hook to dependencies
  // useWidth hook allows for element to be properly placed after window resizing
  // e.g. when a phone gets turned sideways

  return (
    <StyledCard span={gridRowEnd}>
      <div ref={imageEl}>
        <img src={images.find(Boolean)} alt={description} />
      </div>
      <CardTitle>{name}</CardTitle>
      <CardPrice>{formatPrice(unit_amount, currency)}</CardPrice>
    </StyledCard>
  )
}

const StyledCard = styled.div`
  width: 100%;
  height: 100%;
  grid-row-end: ${p => p.span};
`

const CardTitle = styled.h2`
  margin: 0 0 0.5rem;
`

const CardPrice = styled.p`
  margin: 0;
`


export default ProductCard