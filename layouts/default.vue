<template>
  <div class="layout columns is-gapless">
    <div class="column is-2 is-desktop">
      <Menu />
    </div>
    <div class="column page-layout">
      <div class="page">
        <ActionBar />
        <nuxt />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Menu from '../../WEB/components/Menu'
import ActionBar from '../../WEB//components/ActionBar.vue'
export default Vue.extend({
  components: {
    Menu,
    ActionBar
  }
})
</script>

<style scoped>
.is-2 {
  width: auto !important;
}
.page {
  position: relative;
  flex-grow: 1;
  background-color: #eceff1;
  padding: 0 15px 0 15px;
}
.page-layout {
  height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}
html {
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
