import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import fetch from "cross-fetch"
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
  gql,
  useQuery,
} from "@apollo/client"

const client = new ApolloClient({
  link: new HttpLink({
    uri: "/.netlify/functions/fauna-graphql",
    fetch,
  }),
  cache: new InMemoryCache(),
})

const ALL_PRODUCTS_QUERY = gql`
  query {
    allProduct {
      data {
        count
        price_id
      }
    }
  }
`

const InventoryPage = ({
  data: pageQuery
}) => {
  console.log(pageQuery)

  const { loading, error, data } = useQuery(ALL_PRODUCTS_QUERY)

  // const handleClick = async e => {
  //   const client = await fetch("./netlify/functions/fauna-graphql", {
  //     method: "get",
  //     body: JSON.stringify({
  //       query: ALL_PRODUCTS,
  //     }),
  //   }).then(res => res.json())
  //   console.log(client)
  // }

  console.log('Loading: ', loading)
  console.log('Error: ', error)
  console.log('Data: ', data)
  return (
    <Layout>
      <SEO title="Inventory" />
      Hello
      {/* <button onClick={handleClick}>TEST FAUNA</button> */}
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

const InventoryPageWithProvider = () => (
  <ApolloProvider client={client}>
    <InventoryPage />
  </ApolloProvider>
)
export default InventoryPageWithProvider
