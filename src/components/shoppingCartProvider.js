import React, { Children } from 'react'

import getStripe from '../utils/stripe'
import { CartProvider } from 'use-shopping-cart'

const ShoppingCartProvider = ({children}) => (
  <CartProvider
    mode='client-only'
    stripe={getStripe}
    successUrl='http://localhost:8000/'
    cancelUrl='http://localhost:8000/failure'
    currency='USD'
    allowedCountries={['US']}
    billingAddressCollection={true}
  >
    {children}
  </CartProvider>
)

export default ShoppingCartProvider