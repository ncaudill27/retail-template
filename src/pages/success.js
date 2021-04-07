import React from "react"
import { useShoppingCart } from "use-shopping-cart"
import { formatPrice } from "../utils/helpers"

import Layout from "../components/layout"
import SEO from "../components/seo"

import SuccessMessage from "../components/successMessage"

const SuccessPage = () => {
  const { totalPrice } = useShoppingCart()
  console.log(totalPrice)
  const totalAmount = formatPrice(totalPrice)
  console.log(totalAmount)
  return (
    <Layout>
      <SEO title="success" />
      <SuccessMessage totalAmount={totalAmount} />
    </Layout>
  )
}

export default SuccessPage
