import React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { spacing } from '../utils/helpers'

const CartItem = ({
  name,
  quantity,
  description,
  gatsbyImage,
  formattedValue,
}) => (
  <StyledCartItem>
    <ImageNameWrapper>
      <Image
        image={gatsbyImage}
        alt={description}
      />
      <Name>{name}</Name>
    </ImageNameWrapper>
    <PricingWrapper>
      <PricingBox>
        <h6>Quantity</h6>
        <p>{quantity}</p>
      </PricingBox>
      <AtSign>&#64;</AtSign>
      <PricingBox>
        <h6>Total</h6>
        <p>{formattedValue}</p>
      </PricingBox>
    </PricingWrapper>
  </StyledCartItem>
)

const StyledCartItem = styled.div`
  padding-left: ${spacing(1)};
  padding-right: ${spacing(1)};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`

const ImageNameWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: ${spacing(0)};
`

const Image = styled(GatsbyImage)`
  flex-grow: 1;
  width: 33%;
`

const Name = styled.h3`
  text-align: right;
  flex-grow: 2;
  width: 66%;
`

const PricingWrapper = styled.div`
  margin-top: ${spacing(2)};
  height: ${spacing(5)};
  display: flex;
  justify-content: center;
  align-content: center;
  gap: ${spacing(2)};

  & > * {
    text-align: center;
    height: 100%;
  }
`

const PricingBox = styled.div`
  h6 {
    margin-bottom: 0.25em;
    font-size: 1rem;
    text-decoration: underline;
    font-weight: bold;
  }

  p { margin: 0; }
`

const AtSign = styled.span`
  display: flex;
  height: 80%;
  justify-content: center;
  align-items: center;
  font-size: 1.75rem;
`

export default CartItem
