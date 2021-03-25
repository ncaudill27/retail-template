import React from "react"
import styled from "styled-components"

import ProductCard from "./productCard"

const ProductGrid = ({ products, handleDialog }) => {
  return (
    <Grid onClick={handleDialog}>
      {products.map(({ node: product }) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </Grid>
  )
}

const Grid = styled.div`
  display: grid;
  gap: 0px 80px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 20px;
  width: 100%;
`

export default ProductGrid
