export const formatPrice = (amount, currency = "USD") => {
  let price = (amount / 100).toFixed(2)
  let numberFormat = new Intl.NumberFormat(["en-US"], {
    style: "currency",
    currency,
    currencyDisplay: "symbol",
  })
  return numberFormat.format(price)
}

export const spacing = idx => props => props.theme.spacing(idx) + "px"
export const colors = key => props => props.theme.colors[key]
