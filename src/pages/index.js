import React, { useState } from "react"
import { graphql } from "gatsby"

import ProductGrid from "../components/productGrid"
import ProductModal from "../components/productModal"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const [showDialog, setShowDialog] = useState(false)
  const toggleDialog = () => setShowDialog(prev => !prev)

  return (
    <Layout>
      <SEO title="Home" />
      <ProductGrid products={data.products.edges} handleDialog={toggleDialog} />
      <ProductModal showDialog={showDialog} toggleDialog={toggleDialog} />
    </Layout>
  )
}
export const query = graphql`
  query ProductPrices {
    products: allStripePrice(
      filter: { active: { eq: true } }
      sort: { fields: [unit_amount] }
    ) {
      edges {
        node {
          id
          active
          unit_amount
          product {
            id
            name
            description
            image: localFiles {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          currency
        }
      }
    }
  }
`

export default IndexPage
