<template>
  <div id="account-main-placeholder" class="main-placeholder">
    <div class="placeholder-content">
      <img src="../../assets/profile.svg" alt />
      <h3>Welcome, Guest</h3>
      <p>
        Guest users don't have accounts. Please login or register to view your
        account.
      </p>
      <div class="button-wrap">
        <a href="/login" class="button big-button primary-button rounded raised">Log In</a>
      </div>
      <nuxt-link class="menu-item-text" to="/register">
        <p>Don't have an account?</p>
      </nuxt-link>
    </div>
  </div>
</template>
<script lang="ts"></script>
<style scoped>
.main-placeholder {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 650px;
}
.main-placeholder .placeholder-content {
  width: 100%;
  max-width: 340px;
  margin: 0 auto;
  text-align: center;
}
.main-placeholder .placeholder-content img {
  display: block;
  max-width: 230px;
  margin: 0 auto 20px auto;
}
.main-placeholder .placeholder-content h3 {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: #4a4a4a;
}
.main-placeholder .placeholder-content p {
  color: #999;
}
.main-placeholder .placeholder-content .button-wrap {
  margin: 20px 0;
}
.main-placeholder .placeholder-content .button-wrap .button {
  min-width: 200px;
}
.main-placeholder .placeholder-content > a {
  font-size: 0.9rem;
  color: #999;
}
.main-placeholder .placeholder-content > a:hover {
  color: #0023ff;
}
</style>
