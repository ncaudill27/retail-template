import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { useShoppingCart } from "use-shopping-cart"
import { GatsbyImage } from "gatsby-plugin-image"
import { formatPrice } from "../utils/helpers"

import MaxWidthWrapper from "./maxWidthWrapper"
import Dialog from "@reach/dialog"
import Close from "./images/close"

import "@reach/dialog/styles.css"

const ProductModal = ({ showDialog, closeDialog, product, showCart }) => {
  // deconstruct product
  const {
    name,
    price,
    labelId,
    currency,
    description,
    displayedImages,
  } = product
  // aria-labelledby derived from product_id
  const label = `label__${product.product_id}`

  const { addItem } = useShoppingCart()
  const handleAddItem = async () => {
    // add item to cart
    await addItem(product)
    // close current product dialog
    await closeDialog()
    // open cart dialog
    showCart()
  }

  const [isOpen, setIsOpen] = React.useState(false)
  const toggleOpen = () => setIsOpen(prev => !prev)

  return (
    <StyledDialog
      isOpen={showDialog}
      onDismiss={closeDialog}
      aria-labelledby={label}
    >
      <Close onClick={closeDialog} style={{ zIndex: 1 }} />
      <SuperWrapper width={995}>
        <ImgWrapper>
          <Image
            image={displayedImages && displayedImages[0]}
            alt={description}
            layout="constrained"
          />
        </ImgWrapper>
        <CopyWrapper
          style={{
            "--height": isOpen ? "70vh" : "40vh",
          }}
        >
          <MaxWidthWrapper width={480}>
            <NamePriceWrapper onClick={toggleOpen}>
              <Name id={labelId}>{name}</Name>
              <Price>{formatPrice(price, currency)}</Price>
            </NamePriceWrapper>
            <p>{description}</p>
            {/* add "show more" button to show selectors for different price points */}
          </MaxWidthWrapper>
        </CopyWrapper>
        <ButtonWrapper>
          <AddToCartBtn onClick={handleAddItem}>Add To Cart</AddToCartBtn>
        </ButtonWrapper>
      </SuperWrapper>
    </StyledDialog>
  )
}

const StyledDialog = styled(Dialog)`
  position: relative;
  top: 0;
  right: 0;
  left: 0;
  margin: auto;
  height: 100vh;
  width: 100%;
  padding: 0;

  isolation: isolate;
  background-color: var(--color-background);

  @media (min-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: var(--color-primary-muted);
  }
`

const SuperWrapper = styled(MaxWidthWrapper)`
  background-color: inherit;
  @media (min-width: 800px) {
    height: 500px;
    padding-left: var(--spacing-1);
    padding-right: var(--spacing-1);
    
    display: grid;
    gap: var(--spacing-4);
    grid-template-areas:
      "image copy"
      "image button";
    
  }
`

const ImgWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 800px) {
    position: static;
    grid-area: image;
    height: 100%;
    overflow: hidden;
  }
`

const Image = styled(GatsbyImage)`
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  height: 70vh;

  @media (min-width: 800px) {
    height: unset;
    max-width: 500px;
    min-height: 643px;
  }
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

  @media (min-width: 800px) {
    position: static;
    padding: 0;
    grid-area: copy;
    max-height: unset;
    height: unset;
    min-width: 474px;
  }
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

const Name = styled.h2`
  font-family: var(--font-family-secondary);
`;

const Price = styled.h2`
  font-weight: 400;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: var(--spacing-0);
  width: 100%;
  padding: var(--spacing-2);

  @media (min-width: 800px) {
    position: static;
    padding: 0;
    grid-area: button;
    align-self: flex-end;
  }
`

const AddToCartBtn = styled.button`
  width: 100%;
  outline: none;
  border: none;
  padding: var(--spacing-1);
  background-color: var(--color-primary-darkened);
  font-family: var(--font-family-tertiary);
  color: var(--color-background);
  text-transform: uppercase;
`

ProductModal.propTypes = {
  showDialog: PropTypes.bool.isRequired,
  closeDialog: PropTypes.func.isRequired,
  showCart: PropTypes.func.isRequired,
}

ProductModal.defaultProps = {
  product: {},
}

export default ProductModal
