<template>
  <div>
    <h1>Product List</h1>
    <img
      v-if="loading"
      src="https://i.imgur.com/JfPpwOA.gif"
      alt="random"
    >
    <ul v-else>
      <li v-for="product in products" :key="product.title">
        {{ product.title }}-{{ product.price }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false
    }
  },
  computed: {
    products () {
      return this.$store.getters.avaiableProducts
    }
  },
  created () {
    this.loading = true
    this.$store.dispatch('fetchProducts')
      .then(() => { this.loading = false })
  }
}
</script>

<style></style>
