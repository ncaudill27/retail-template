import React from "react"

import { CartProvider } from "use-shopping-cart"
import { loadStripe } from "@stripe/stripe-js"

import GlobalStyles from "./src/css/globalStyles"

import { ApolloProvider } from "@apollo/client"
import { client } from "./src/apollo/client"

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY)

export const wrapRootElement = ({ element }) => (
  <CartProvider
    mode="client-only"
    stripe={stripePromise}
    successUrl="http://localhost:8000/success"
    cancelUrl="http://localhost:8000/failure"
    currency="USD"
    allowedCountries={["US"]}
    billingAddressCollection={true}
  >
    <GlobalStyles />
    <ApolloProvider client={client}>{element}</ApolloProvider>
  </CartProvider>
)
