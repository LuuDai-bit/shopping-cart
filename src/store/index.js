import Vuex from 'vuex'
import Vue from 'vue'
import shop from '@/api/shop.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // == data
    products: [],
    // id, num quantity
    cart: []
  },
  getters: { // == computed properties
    avaiableProducts (state, getters) {
      return state.products.filter(product => product.inventory > 0)
    }
  },
  actions: { // == method
    fetchProducts ({commit}) {
      return new Promise((resolve, reject) => {
        shop.getProducts(products => {
          commit('setProducts', products)
          resolve()
        })
      })
    },
    addProductToCart (context, product) {
      const cartItem = this.state.products.find(item => { item.id === product.id })
      if (product.inventory > 0) {
        if (!cartItem) {
          context.commit('pushProductToCart', product.id);
        } else {
          //add one to quantity of the item
        }
      }
    }
  },
  mutations: {
    setProducts (state, products) {
      state.products = products
    },
    
  }
})
