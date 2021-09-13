import React from 'react'
import styled from 'styled-components'
import useProductsTransformer from "../hooks/useProductsTransformer"

import Header from './typography/headingSec'

const FeatureSection = ({products}) => {
  const transformedProducts = useProductsTransformer(products?.edges)

  console.log(transformedProducts);
  return (
    <RootWrapper>
      <Header>Products of the week</Header>
    </RootWrapper>
  )
}

const RootWrapper = styled.div`
  padding: var(--spacing-4) var(--spacing-1);
  margin: 0;
  background-color: var(--color-primary-muted);
`;

export default FeatureSection