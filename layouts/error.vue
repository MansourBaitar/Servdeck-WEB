<template>
  <div class="container">
    <div class="error-layout">
      <h1 class="title" v-if="error.statusCode === 404">Page not found</h1>
      <h1 v-else>An error occurred</h1>
      <p
        class="subtitle"
      >Uh oh, we can't seem to find the page you're looking for. Try going back to the previous page.</p>
      <button class="button is-danger">
        <nuxt-link to="/dashboard">Go To Home</nuxt-link>
      </button>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  props: ['error']
}
</script>
<style>
.error-layout {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.title {
  color: #363636;
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.125;
}
.subtitle {
  color: #4a4a4a;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.25;
}
.subtitle,
.title {
  word-break: break-word;
}
</style>