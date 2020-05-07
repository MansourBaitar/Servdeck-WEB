<template>
  <aside class="menu">
    <ul class="menu-list">
      <li>
        <div class="menu-item logo-box">Logo</div>
      </li>
      <li>
        <div class="menu-item">
          <nuxt-link class="menu-item-text" to="/dashboard">
            <font-awesome-icon class="icon" :icon="['fas', 'home']" />Dashboard
          </nuxt-link>
        </div>
      </li>
      <li>
        <div class="menu-item">
          <a class="menu-item-text" href="/customers">
            <font-awesome-icon class="icon" :icon="['fas', 'user-circle']" />Customers
          </a>
        </div>
      </li>
      <li>
        <div class="menu-item">
          <a class="menu-item-text" href="/invoices">
            <font-awesome-icon class="icon" :icon="['fas', 'file-invoice']" />Invoices
          </a>
        </div>
      </li>
      <li>
        <div class="menu-item">
          <a class="menu-item-text" href="/products">
            <font-awesome-icon class="icon" :icon="['fas', 'shopping-bag']" />Products
          </a>
        </div>
      </li>
      <li>
        <div class="menu-item">
          <a class="menu-item-text" href="/budgets">
            <font-awesome-icon class="icon" :icon="['fas', 'circle-notch']" />Budgets
          </a>
        </div>
      </li>
      <li>
        <div class="menu-item">
          <a class="menu-item-text" href="/communication">
            <font-awesome-icon class="icon" :icon="['fas', 'comments']" />Communication
          </a>
        </div>
      </li>
      <li>
        <div class="menu-item">
          <a class="menu-item-text" href="/metrics">
            <font-awesome-icon class="icon" :icon="['fas', 'chart-pie']" />Metrics
          </a>
        </div>
      </li>
    </ul>
  </aside>
</template>
<script lang="ts"></script>
<style scoped>
.menu {
  padding: 0.75rem;
  height: 100%;
  background-color: #361261;
}
.menu-list {
  color: white;
}
.menu-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 5px;
  padding: 5px;
}
.menu-item a {
  color: white;
}
.menu-item a:hover {
  background-color: orange;
}
.menu-item-text {
  font-size: 20px;
}
.icon {
  height: 18px;
  widows: 18px;
  margin-right: 10px;
}
.logo-box {
  text-align: center;
  display: block;
}
.is-closed {
  width: 30px;
}
</style>
