import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import MaxWidthWrapper from "./maxWidthWrapper"
import ProductCard from "./productCard"

const ProductGrid = ({ products, handleProductView }) => {
  // console.log(products)
  return (
    <MaxWidthWrapper width={1000}>
      <Grid>
        {products.map(product => (
          <ProductCard
            key={product.id}
            handleProductView={handleProductView}
            {...product}
          />
        ))}
      </Grid>
    </MaxWidthWrapper>
  )
}

const Grid = styled.div`
  padding: var(--spacing-1);
  padding-top: var(--spacing-2);
  display: grid;
  gap: var(--spacing-2) var(--spacing-1);
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  width: 100%;
`

ProductGrid.defaultProps = {
  products: [],
}

ProductGrid.propTypes = {
  products: PropTypes.array.isRequired,
  // require state manipulation to view product details
  // unless other method such as product pages/templates implemented
  handleProductView: PropTypes.func.isRequired,
}

export default ProductGrid
