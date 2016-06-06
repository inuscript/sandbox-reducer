const redux = require('redux')
const combineReducers = redux.combineReducers

// 商品
const products = (state = {}, action) => {
  return state
}

// おかいものカート
const cart = (state = [], action) => {
  switch(action.type){
    case 'ADD_PRODUCT':
      return [...state, action.payload]
    default:
      return state
  }
}

// item + computed
module.exports = combineReducers({
  cart: cart,
  products: products
})