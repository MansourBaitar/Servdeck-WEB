<template>
  <div class="invoice-page">
    <div class="columns is-6">
      <div class="column is-one-quarter">
        invoices
        <div class="box">
          <p class="subtitle">CURRENT</p>
          <p class="title">$10,123.10</p>
        </div>
        <div class="box">
          <p class="subtitle">1-30 DAYS PAST DUE</p>
          <p class="title">$7,777.10</p>
        </div>
        <div class="box">
          <p class="subtitle">31-60 DAYS PAST DUE</p>
          <p class="title">$8,123.10</p>
        </div>
        <div class="box">
          <p class="subtitle">61-90 DAYS PAST DUE</p>
          <p class="title">$100,777.10</p>
        </div>
        <div class="box">
          <p class="subtitle">90+ DAYS PAST DUE</p>
          <p class="title">$123.10</p>
        </div>
      </div>
      <div class="column">
        Collection Progress
        <div class="box box-large">{{ data }}</div>
      </div>
    </div>
    <div>
      <div class="tabs tab-menu is-medium">
        <ul>
          <li class="is-active">
            <a>Oustanding charges</a>
          </li>
          <li>
            <a>Recurring Charges</a>
          </li>
          <li>
            <a>All charges</a>
          </li>
          <li>
            <a>Deleted Charges</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import axios from '../../plugins/axios'

export default Vue.extend({
  data() {
    return {
      data: null
    }
  },
  async asyncData() {
    try {
      let result = await axios.get('products')
      return { data: result.data }
    } catch (error) {
      console.log('ERROR ' + error)
      return { data: 'Could not fetch data from API, Try again later' }
    }
  }
})
</script>
<style scoped>
.invoice-page {
  margin: 0 15px;
}
.tab-menu ul {
  border-bottom: none !important;
}
.box:not(:last-child) {
  background-color: white;
  height: 90px !important ;
  border-bottom: 1px solid transparent !important;
  margin: 0 !important;
  border-radius: 0 !important;
  margin-bottom: 1px !important;
}
.box {
  height: 90px;
  border-radius: 0;
}
.box-large {
  background-color: white;
  height: 454px;
}
.title {
  font-size: 30px;
  color: black;
}
.subtitle {
  color: grey;
  font-size: 14px;
  font-style: bold;
}
</style>
