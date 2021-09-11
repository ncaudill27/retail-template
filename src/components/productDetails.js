import React from "react"
import PropTypes from "prop-types"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { formatPrice } from "../utils/helpers"

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
  console.log(isOpen);
  return (
    <>
      <ImgWrapper
        style={{ "--background-color": displayedImages[0].backgroundColor }}
      >
        <Image image={displayedImages[0]} alt={description} />
      </ImgWrapper>
      <CopyWrapper style={{
        '--height': isOpen ? '70vh' : '40vh'
      }}>
        <NamePriceWrapper onClick={toggleOpen}>
          <h2 id={labelId}>{name}</h2>
          <h2>{formatPrice(price, currency)}</h2>
        </NamePriceWrapper>
        <p>{description}</p>
        {/* add "show more" button to show selectors for different price points */}
      </CopyWrapper>
    </>
  )
}

const ImgWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--background-color);
`

const Image = styled(GatsbyImage)`
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  height: 70vh;
`

const CopyWrapper = styled.div`
  position: absolute;
  /* pull product details up into product image */
  bottom: 0;
  max-height: var(--height);
  height: var(--height);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: var(--spacing-2);
  background-color: var(--color-background);
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
