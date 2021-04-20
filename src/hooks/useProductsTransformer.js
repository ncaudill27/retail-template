import { getImage } from 'gatsby-plugin-image'

export default function useProductsTransformer(stripeData) {

  const memo = {}

  stripeData.map(({node: product}) => {
    transformProduct(product, memo)
  })

  return Object.values(memo)
}

function transformProduct(productData, memo) {
  let product
  product = flattenProduct(productData)
  product = handleMemoizedObject(product, memo)
  memoize(product, memo)
  // TODO add cleanup to remove properties unused by frontend
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

// check if product with same name has been added
const isMemo = ({name}, memo) => !!memo[name]
const memoize = (product, memo) => memo[product.name] = product

// checks if Stripe Product already exists by name
// we want to data from multiple products name together into the same object
function handleMemoizedObject(newProduct, memo) {
// look for product products with matching names
  if ( isMemo(newProduct, memo) ) {
    // if we find the product we update it with the new data
    let memoProduct = memo[newProduct.name]
    memoProduct = updatePriceIds(memoProduct, memo, newProduct.id, newProduct.price)
    memoProduct = updateDisplayedImages(memoProduct, memo, newProduct.image)
    return memoProduct
  } else {

    newProduct = updatePriceIds(newProduct, memo, newProduct.id, newProduct.price)
    newProduct = updateDisplayedImages(newProduct, memo, newProduct.image)
    // and return the current product
    return newProduct
  }
}

// adds displayedImages property
function updateDisplayedImages(product, memo, image) {
  const newImageData = getImage(image.find(Boolean))


  const displayedImages =
    isMemo(product, memo)
      // uses a Set to filter out differing price points that use the same image
      ? [new Set([...product.displayedImages, newImageData])]
      : [newImageData]

  // spread (copy) product and add displayedImages property
  return {
    ...product,
    displayedImages
  }
}

// adds priceIds property to allow for consolidation of various price points
// if priceIds property already exists adds new entry
function updatePriceIds(product, memo, id, price) {
  const newPriceProp = { id, price }

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