import React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

import Heading from "./typography/headingQua"
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
      <Image
        image={displayedImages.find(Boolean)}
        alt={description}
        layout="constrained"
      />
      <CopyWrapper>
        <Heading>{name}</Heading>
        <Description>{description}</Description>
      </CopyWrapper>
      <QuantityWrapper>
        <InputQuantity id={id} quantity={quantity} />
        <PricingWrapper>
          {/* <h6>Total</h6> */}
          <p>{formattedValue}</p>
        </PricingWrapper>
      </QuantityWrapper>
    </StyledCartItem>
  </>
)

const StyledCartItem = styled.div`
  padding-right: var(--spacing-4);
  padding-top: var(--spacing-5);
  display: flex;
  justify-content: space-between;
`

const Image = styled(GatsbyImage)`
  width: 30%;
`

const CopyWrapper = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Description = styled.p`
  font-size: 14px;
  line-height: 1.1;
  font-family: var(--font-family-tertiary);
`

const QuantityWrapper = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const PricingWrapper = styled.div`
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
  text-align: center;
  font-family: var(--font-family-tertiary);
`

export default CartItem
