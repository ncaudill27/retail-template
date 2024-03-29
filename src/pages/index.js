import React, { useState } from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import useProductsTransformer from "../hooks/useProductsTransformer"

import ProductGrid from "../components/productGrid"
import ProductModal from "../components/productModal"
import CartModal from "../components/cartModal"
import FeatureSection from "../components/featureSection"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {

  // transform data from Stripe Products
  const transformedProducts = useProductsTransformer(data?.products?.edges)
  // state actions for viewing more details of a single product
  const [showProductDialog, setShowProductDialog] = useState(false)
  const openProductDialog = () => setShowProductDialog(true)
  const closeProductDialog = () => setShowProductDialog(false)
  // the actual product being displayed
  const [dialogProduct, setDialogProduct] = useState({})

  // state actions for viewing current cart
  const [showCartDialog, setShowCartDialog] = useState(false)
  const openCartDialog = () => setShowCartDialog(true)
  const closeCartDialog = () => setShowCartDialog(false)

  // function allows for passing of a product from
  // layout view (ProductGrid) -> detailed view (ProductModal)
  const handleProductView = product => e => {
    setDialogProduct(product)
    openProductDialog()
  }

  return (
    <Layout showCart={openCartDialog}>
      <SEO title="Home" />
      <StaticImage
        src="../images/green-hero.jpg"
        attribution="https://unsplash.com/@chrisleeiam"
        alt="gradient image starting with yellow"
        style={{ width: "100%", height: "500px" }}
      />
      <FeatureSection
        products={data?.featured?.edges}
        handleProductView={handleProductView}
      />
      <ProductGrid
        products={transformedProducts}
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
            metadata {
              size
              outdoor
            }
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
    featured: allStripePrice(
      filter: { product: { metadata: { outdoor: { eq: "true" } } } }
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
            metadata {
              size
              outdoor
            }
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

IndexPage.defaultProps = {
  data: {},
}

export default IndexPage
