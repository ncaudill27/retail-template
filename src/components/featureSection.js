import React from "react"
import styled from "styled-components"
import useProductsTransformer from "../hooks/useProductsTransformer"
import ProductCard from "./productCard"

import Header from "./typography/headingSec"

const FeatureSection = ({ products, handleProductView }) => {
  const transformedProducts = useProductsTransformer(products)

  return (
    <RootWrapper>
      <Header>Products of the week</Header>
      <SideScrollWrapper>
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

const RootWrapper = styled.div`
  padding: var(--spacing-4) var(--spacing-1);
  margin: 0;
  background-color: var(--color-primary-muted);
`

const SideScrollWrapper = styled.div`
  overflow-x: scroll;
  
`;

const ProductsWrapper = styled.div`
  padding: var(--spacing-5);
  display: flex;
  gap: var(--spacing-5);
  width: fit-content;
`

FeatureSection.defaultProps = {
  products: {},
}

export default FeatureSection