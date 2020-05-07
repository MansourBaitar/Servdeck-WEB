<template>
  <div v-if="product">
    <p>{{product}}</p>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import axios from '../../plugins/axios'

export default Vue.extend({
  data() {
    return {
      product: null
    }
  },
  async asyncData({ params }) {
    try {
      let result = await axios.get('products/' + params.id)
      return { product: result.data }
    } catch (error) {
      return {
        product: 'Could not fetch product from API, Try again later'
      }
    }
  }
})
</script>
<style>
</style>
