import { getImage } from 'gatsby-plugin-image'

export default function useProductsTransformer(stripeData) {

  const memo = {}

  const transformedProducts = stripeData.map(({node: product}) => {
    console.log(product);
    
    product = transformProduct(product, memo)
    console.log(product);
    return product
  })

  return transformedProducts
}

// check if product with same name has been added
const isMemo = ({name}, memo) => !!memo[name]
const memoize = (product, memo) => memo[product.name] = product

// checks if Stripe Product already exists by name
// we want to data from multiple products name together into the same object
function findMemoizedObject(product, memo) {
// look for product products with matching names
  if ( isMemo(product, memo) ) {
    // if we find the product we return it
    return memo[product.name]
  } else {
    // and return the current product
    return product
  }
}

function transformProduct(productData, memo) {
  let product
  product = flattenProduct(productData)
  product = findMemoizedObject(product, memo)
  product = updatePriceIds(product, memo)
  product = updateDisplayedImages(product, memo)
  memoize(product, memo)
  return product
}

// changes structure of Stripe API data to be more legible and workable
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

// adds displayed images property
// adds new entry to array if existing
function updateDisplayedImages(product, memo) {
  const gatsbyImage = getImage(product.image.find(Boolean))

  const displayedImages =
    isMemo(product, memo)
      ? [...product.displayedImages, gatsbyImage]
      : [gatsbyImage]

  // spread (copy) product and add displayedImages property
  return {
    ...product,
    displayedImages
  }
}

// adds priceIds property to allow for consolidation of various price points
// if priceIds property already exists adds new entry
function updatePriceIds(product, memo) {
  const newPriceProp = { id: product.id, price: product.price }

  const priceIds = 
    isMemo(product, memo)
      ? [...product.priceIds, newPriceProp]
      : [newPriceProp]

  // spread (copy) product and add priceIds property
  return {
    ...product,
    priceIds
  }
}