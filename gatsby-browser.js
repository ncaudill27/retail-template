import React from "react"

import { CartProvider } from "use-shopping-cart"
import { loadStripe } from "@stripe/stripe-js"

import { ThemeProvider } from "styled-components"
import { theme } from "./src/styles/theme"

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
    <ThemeProvider theme={theme}>{element}</ThemeProvider>
  </CartProvider>
)
