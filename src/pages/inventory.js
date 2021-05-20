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
  data
}) => {
  console.log(data)

  const { loading, error, data: apolloData } = useQuery(ALL_PRODUCTS_QUERY)

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
  console.log('Data: ', apolloData)
  return (
    <Layout>
      <SEO title="Inventory" />
      Hello
      {/* <button onClick={handleClick}>TEST FAUNA</button> */}
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

const InventoryPageWithProvider = (props) => (
  <ApolloProvider client={client}>
    <InventoryPage {...props} />
  </ApolloProvider>
)
export default InventoryPageWithProvider
