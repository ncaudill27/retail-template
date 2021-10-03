import React from "react"
import styled from "styled-components"
import useProductsTransformer from "../hooks/useProductsTransformer"
import debounce from '../utils/debounce'

import Heading from "./typography/headingSec"
import ProductCard from "./productCard"
import LeftArrow from "./images/leftArrow"
import RightArrow from "./images/rightArrow"

const FeatureSection = ({ products, handleProductView }) => {
  const transformedProducts = useProductsTransformer(products)

  const sideScrollEl = React.useRef()
  const [scrollLeft, setScrollLeft] = React.useState(0)

  const handleNaturalScroll = debounce(() => {

    setScrollLeft(sideScrollEl.current.scrollLeft);
  }, 100);

  const handleRightScroll = e => {
    sideScrollEl.current.scrollLeft += 853
    setScrollLeft(prev => prev + 853)
  }

  const handleLeftScroll = e => {
    sideScrollEl.current.scrollLeft -= 853
    setScrollLeft(prev => prev - 853)
  }

  return (
    <RootWrapper>
      <Title>Products of the week</Title>
      <SideScrollWrapper ref={sideScrollEl} onScroll={handleNaturalScroll}>
        <SideScrollButtonWrapper >
          <LeftArrow scrollLeft={scrollLeft} onClick={handleLeftScroll} />
          <RightArrow onClick={handleRightScroll} />
        </SideScrollButtonWrapper>
        <ProductsWrapper>
          {transformedProducts.map(product => (
            <ProductCard
              key={product.id}
              handleProductView={handleProductView}
              {...product}
            />
          ))}
        </ProductsWrapper>
      </SideScrollWrapper>
    </RootWrapper>
  )
}

export const RootWrapper = styled.div`
  //! Why do I have to drag this element up?
  position: relative;
  top: calc(-1 * var(--spacing-1));

  padding: var(--spacing-4) 0;
  margin: 0;
  background-color: var(--color-primary-muted);

  isolation: isolate;
`

const Title = styled(Heading)`
  padding-left: var(--spacing-1);
`

const SideScrollButtonWrapper = styled.div`
  position: absolute;
  top: 50%;
  height: 60px;
  margin-top: -50px;
  width: 100vw;

  display: flex;
  justify-content: space-between;

  padding-right: var(--spacing-3);
  padding-left: var(--spacing-3);

  z-index: 1;
`

const SideScrollWrapper = styled.div`
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`

const ProductsWrapper = styled.div`
  padding: var(--spacing-5);
  padding-left: var(--spacing-10);
  display: flex;
  gap: var(--spacing-5);
  width: fit-content;
`

FeatureSection.defaultProps = {
  products: {},
}

export default FeatureSection
