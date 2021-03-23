import * as React from "react"
import ProductGrid from '../components/productGrid'
import { graphql } from "gatsby"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <ProductGrid products={data.products.edges} />
  </Layout>
)

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

export default IndexPage
