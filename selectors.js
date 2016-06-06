const reselect = require('reselect')
const createSelector = reselect.createSelector

const productSelector = state => state.products
const cartSelector = state => state.cart
const total = createSelector(
  productSelector, cartSelector,
  (products, cart) => {
    // カートの各商品
    const prices = cart.map( prod => {
      return products[prod].price
    })
    console.log(prices)
    return prices.reduce( (curr, next) => curr + next, 0)
  }
)
module.exports.total = total