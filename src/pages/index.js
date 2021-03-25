import React, { useState } from "react"
import { graphql } from "gatsby"

import ProductGrid from "../components/productGrid"
import ProductModal from "../components/productModal"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const [showDialog, setShowDialog] = useState(false)
  const openDialog = () => setShowDialog(true)
  const closeDialog = () => setShowDialog(false)

  const [dialogProduct, setDialogProduct] = useState({})

  const handleProductView = product => e => {
    setDialogProduct(product)
    openDialog()
  }

  return (
    <Layout>
      <SEO title="Home" />
      <ProductGrid
        products={data.products.edges}
        handleProductView={handleProductView}
      />
      <ProductModal
        product={dialogProduct}
        showDialog={showDialog}
        openDialog={openDialog}
        closeDialog={closeDialog}
      />
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
