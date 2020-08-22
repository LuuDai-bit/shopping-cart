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
    }
  },
  mutations: {
    setProducts (state, products) {
      state.products = products
    }
  }
})
