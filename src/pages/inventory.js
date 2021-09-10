import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { gql, useQuery } from "@apollo/client"

const ALL_PRODUCTS_QUERY = gql`
  query {
    inventory: allProduct {
      data {
        count
        price_id
      }
    }
  }
`

const InventoryPage = ({ data: pageQuery }) => {
  console.log(pageQuery?.products?.edges)

  const { loading, error, data: apolloData } = useQuery(ALL_PRODUCTS_QUERY)

  console.log("Data: ", apolloData?.inventory?.data)
  console.log("Loading: ", loading)
  console.log("Error: ", error)

  return (
    <Layout>
      <SEO title="Inventory" />
      Hello
    </Layout>
  )
}

export const query = graphql`
  query ProductInventory {
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
              small
              large
              fuckyouttest
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

InventoryPage.defaultProps = {
  data: {},
}

export default InventoryPage
