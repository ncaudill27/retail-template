import React, { useState } from "react"
import { graphql } from "gatsby"

import CartPortal from "../components/cartPortal"
import ProductGrid from "../components/productGrid"
import ProductModal from "../components/productModal"
import CartModal from "../components/cartModal"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const [showProductDialog, setShowProductDialog] = useState(false)
  const openProductDialog = () => setShowProductDialog(true)
  const closeProductDialog = () => setShowProductDialog(false)

  const [showCartDialog, setShowCartDialog] = useState(false)
  const openCartDialog = () => setShowCartDialog(true)
  const closeCartDialog = () => setShowCartDialog(false)

  const [dialogProduct, setDialogProduct] = useState({})

  const handleProductView = product => e => {
    setDialogProduct(product)
    openProductDialog()
  }

  return (
    <Layout>
      <SEO title="Home" />
      <CartPortal showCart={openCartDialog} />
      <ProductGrid
        products={data.products.edges}
        handleProductView={handleProductView}
      />
      <ProductModal
        product={dialogProduct}
        showDialog={showProductDialog}
        closeDialog={closeProductDialog}
        showCart={openCartDialog}
      />
      <CartModal
        showDialog={showCartDialog}
        openDialog={openCartDialog}
        closeDialog={closeCartDialog}
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
