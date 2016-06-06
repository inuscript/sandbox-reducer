const redux = require('redux')
const createStore = redux.createStore
const rootReducer = require('./reducer')
const actions = require('./actions')

const initialProducts = {
  1: {
    id: 1,
    name: "foo",
    price: 100
  },
  2: {
    id: 2,
    name: "baz",
    price: 200
  }
}

const store = createStore(rootReducer, {
  products: initialProducts, 
  cart: [],
  total: 0
})

console.log(store.getState())

// 本当はIDさえ貰えればいいのにproductのオブジェクトを保持しなきゃいけない。
store.dispatch(actions.addCart(initialProducts[1]))

console.log(store.getState())
