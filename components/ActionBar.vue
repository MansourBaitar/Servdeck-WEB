<template>
  <div class="columns">
    <div class="column">
      <div class="field">
        <div class="control has-icons-left has-icons-right">
          <input class="input boxshadow" type="text" placeholder="Search" />
          <!--<font-awesome-icon class="icon is-right" :icon="['fas', 'search']" /> -->
        </div>
      </div>
    </div>
    <div class="column">
      <!--UserProfile Icon -->
      <div class="dropdown is-hoverable is-right pull-right">
        <div class="dropdown-trigger">
          <button
            class="button icon-button"
            aria-haspopup="true"
            aria-controls="dropdown-menu4"
          >
            <font-awesome-icon class="icon" :icon="['fas', 'user-circle']" />
          </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu4" role="menu">
          <div class="dropdown-content">
            <div class="dropdown-item">
              <nuxt-link to="/profile">My Profile</nuxt-link>
            </div>
            <div class="dropdown-item">
              <nuxt-link to="/settings">Settings</nuxt-link>
            </div>
            <div class="dropdown-item">
              <nuxt-link to="/login">Log Out</nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <!-- Notfications Icon -->
      <div class="dropdown is-hoverable is-right pull-right">
        <div class="dropdown-trigger">
          <button
            class="button icon-button"
            aria-haspopup="true"
            aria-controls="dropdown-menu4"
          >
            <font-awesome-icon class="icon" :icon="['fas', 'bell']" />
          </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu4" role="menu">
          <div class="dropdown-content">
            <div class="dropdown-item">
              <p>
                <strong>Notifications</strong>
                <br />Notification 1
              </p>
              <p>Notification 2</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Support Icon -->
      <div class="dropdown is-hoverable is-right pull-right">
        <div class="dropdown-trigger">
          <button
            class="button icon-button"
            aria-haspopup="true"
            aria-controls="dropdown-menu4"
          >
            <font-awesome-icon class="icon" :icon="['fas', 'life-ring']" />
          </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu4" role="menu">
          <div class="dropdown-content">
            <div class="dropdown-item">
              <p>
                <strong>Support</strong>
                <br />Support tickets here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts"></script>
<style scoped>
.boxshadow {
  box-shadow: 0px 1px #888888;
}
.pull-right {
  float: right;
}
.icon {
  color: #361261;
}
.icon-button {
  border: none;
  background-color: transparent;
}
</style>
