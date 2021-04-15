import React from "react"
import PropTypes from 'prop-types'
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
      <ImgWrapper style={{'--background-color': gatsbyImage.backgroundColor}}>
        <Image image={gatsbyImage} alt={description} />
      </ImgWrapper>
      <CopyWrapper>
        <NamePriceWrapper>
          <h2 id={labelId}>{name}</h2>
          <h2>{formatPrice(price, currency)}</h2>
        </NamePriceWrapper>
        <p>{description}</p>
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
`

const CopyWrapper = styled.div`
  position: relative;
  top: -${spacing(2)};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: ${spacing(2)};
  background-color: white;
  overflow-y: scroll;
`

const NamePriceWrapper = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: ${spacing(1)};
  margin-bottom: ${spacing(3)};
`

ProductDetails.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  labelId: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  gatsbyImage: PropTypes.object.isRequired,
}

export default ProductDetails
