<template>
  <div v-if="customer">
    <p>{{customer}}</p>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import axios from '../../plugins/axios'

export default Vue.extend({
  data() {
    return {
      customer: null
    }
  },
  async asyncData({ params }) {
    try {
      let result = await axios.get('customers/' + params.id)
      return { customer: result.data }
    } catch (error) {
      return {
        customer: 'Could not fetch product from API, Try again later'
      }
    }
  }
})
</script>
<style>
</style>
