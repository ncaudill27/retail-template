import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import SuccessMessage from "../components/successMessage"
import SuccessForm from "../components/successForm"

const SuccessPage = () => {
  return (
    <Layout>
      <SEO title="success" />
      <SuccessMessage />
      <SuccessForm />
    </Layout>
  )
}

export default SuccessPage
