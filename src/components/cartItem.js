import React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

import Name from "./typography/headingQua"
import InputQuantity from "./inputQuantity"

const CartItem = ({
  id,
  name,
  quantity,
  description,
  displayedImages,
  formattedValue,
}) => (
  <>
    <StyledCartItem>
        <Image image={displayedImages.find(Boolean)} alt={description} layout="constrained" />
        <CopyWrapper>
        <Name>{name}</Name>
        <Description>{description}</Description>
        </CopyWrapper>
      <PricingWrapper>
        <h6>Quantity</h6>
        <InputQuantity id={id} quantity={quantity} />
        <h6>Total</h6>
        <p>{formattedValue}</p>
      </PricingWrapper>
    </StyledCartItem>
  </>
)

const StyledCartItem = styled.div`
  padding-right: var(--spacing-5);
  display: flex;
  justify-content: space-between;

`

const Image = styled(GatsbyImage)`
  width: 30%;
`

const CopyWrapper = styled.div`
  width: 30%;
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 1.1;
`;

const PricingWrapper = styled.div`
  width: 30%;
  text-align: right;
`

const AtSign = styled.span`
  display: flex;
  height: 80%;
  justify-content: center;
  align-items: center;
  font-size: 1.75rem;
`

export default CartItem
