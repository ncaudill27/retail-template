import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const ALL_PRODUCTS = `
  query {
    allProduct {
      data {
        count
        price_id
      }
    }
  }
`

const InventoryPage = ({ data }) => {
  console.log(data?.products?.edges)

  const handleClick = async e => {
    const client = await fetch('./netlify/functions/fauna-graphql', {
      method: 'get',
      body: JSON.stringify({
        query: ALL_PRODUCTS
      })
    }).then(res => res.json())
    console.log(client)
  }

  return (
    <Layout>
      <SEO title="Inventory" />
      Hello
      <button onClick={handleClick}>
        TEST FAUNA
      </button>
    </Layout>
  )
}

export const query = graphql`
  query {
    products: allStripePrice {
      edges {
        node {
          id
          unit_amount
          product {
            name
            images
            metadata {
              colors
              fuckyouttest
              large
              small
            }
          }
        }
      }
    }
  }
`

InventoryPage.defaultProps = {
  data: {},
}

export default InventoryPage
