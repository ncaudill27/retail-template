import { useState } from 'react'
import { getImage } from 'gatsby-plugin-image'

export default function useProductsTransformer(stripeData) {

  const memo = {}

  const transformedProducts = stripeData.map(({node: product}) => {
    console.log(product);
    product = flattenProduct(product)
    product = addGatsbyImageProp(product)
    return product
  })

  return transformedProducts
}

function flattenProduct({
  id,
  active,
  currency,
  unit_amount: price,
  product: { id: product_id, name, image, description },
}) {
   return {
    name,
    id,
    price,
    image,
    currency,
    active,
    product_id,
    description,
  }
}

function addGatsbyImageProp(product) {
  const gatsbyImage = getImage(product.image.find(Boolean))

  return {
    ...product,
    gatsbyImage
  }
}