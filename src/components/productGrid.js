import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import MaxWidthWrapper from "./maxWidthWrapper"
import ProductCard from "./productCard"

const ProductGrid = ({ products, handleProductView }) => {
  // console.log(products)
  return (
    <MaxWidthWrapper>
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
  display: grid;
  gap: 0px 80px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 20px;
  width: 100%;
  padding-top: var(--spacing-4);
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
