const redux = require('redux')
const createStore = redux.createStore
const rootReducer = require('./reducer')

const initialProducts = {
  1: {
    name: "foo",
    price: 100
  },
  2: {
    name: "baz",
    price: 200
  }
}

const store = createStore(rootReducer, {
  products: initialProducts, 
  cart: []
})
console.log(store.getState())