import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from "gatsby";

import ProductCard from './ProductCard'

const ProductGrid = (props) => {
  const data = useStaticQuery(
    graphql`
      query ProductPrices {
        products: allStripePrice(
          filter: { active: { eq: true } }
          sort: { fields: [unit_amount] }
        ) {
          edges {
            node {
              id
              active
              currency
              unit_amount
              product {
                id
                name
                images
                description
              }
            }
          }
        }
      }
    `
  )

  if (!data?.prices) return null //TODO implement some sort of suspense

  return (
    <Grid>

    </Grid>
  )
}

const Grid = styled.div`
  display: grid;
  gap: 0px 80px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 20px;
  grid-row-end: span 1;
  width: 100%;
`
