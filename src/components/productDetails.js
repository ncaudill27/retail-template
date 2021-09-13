import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { formatPrice } from "../utils/helpers"

import MaxWidthWrapper from './maxWidthWrapper'

const ProductDetails = ({
  name,
  price,
  labelId,
  currency,
  description,
  displayedImages,
}) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleOpen = () => setIsOpen(prev => !prev)
  console.log(displayedImages[0].backgroundColor)
  return (
    <>
      <ImgWrapper
        style={{ "--background-color": displayedImages[0].backgroundColor }}
      >
        <Image image={displayedImages[0]} alt={description} />
      </ImgWrapper>
      <CopyWrapper
        style={{
          "--height": isOpen ? "70vh" : "40vh",
        }}
      >
        <MaxWidthWrapper width={480}>
          <NamePriceWrapper onClick={toggleOpen}>
            <h2 id={labelId}>{name}</h2>
            <h2>{formatPrice(price, currency)}</h2>
          </NamePriceWrapper>
          <p>{description}</p>
          {/* add "show more" button to show selectors for different price points */}
        </MaxWidthWrapper>
      </CopyWrapper>
    </>
  )
}

const ImgWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Image = styled(GatsbyImage)`
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  height: 70vh;
`

const CopyWrapper = styled.div`
  padding: var(--spacing-2);
  position: absolute;
  bottom: 0;
  max-height: var(--height);
  height: var(--height);
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: inherit;
`

const NamePriceWrapper = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: var(--spacing-1);
  margin-bottom: var(--spacing-3);
`

ProductDetails.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  labelId: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  displayedImages: PropTypes.array.isRequired,
}

export default ProductDetails
