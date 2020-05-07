<template>
  <div id="login">
    <div class="login-card">
      <div class="card-title">
        <h1>Please Sign Up</h1>
      </div>

      <div class="content">
        <input
          id="firstName"
          type="text"
          name="firstName"
          title="firstName"
          placeholder="First Name"
          required
          autofocus
        />
        <input
          id="lastName"
          type="text"
          name="lastName"
          title="lastName"
          placeholder="Last Name"
          required
          autofocus
        />
        <input
          id="email"
          type="email"
          name="email"
          title="email"
          placeholder="Email"
          required
          autofocus
        />
        <input
          id="password"
          type="password"
          name="password"
          title="password"
          placeholder="Password"
          required
        />
        <button type="submit" class="btn btn-primary">Register</button>
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
      firstName: null,
      lastName: null,
      email: null,
      password: null
    }
  },
  methods: {
    async addUser(
      firstName: string,
      lastName: string,
      email: string,
      password: string
    ) {
      const newUser = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password
      }
      let result = await axios.post('users', newUser)
      console.log(result)
    }
  }
})
</script>
<style scoped>
#login {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #492a79;
}
#login .login-card {
  background: #fff;
  width: 24rem;
  box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.11);
}
#login .login-card .card-title {
  background-color: #7447bb;
  padding: 2rem;
}
#login .login-card .card-title h1 {
  color: #fff;
  text-align: center;
  font-size: 1.2rem;
}
#login .login-card .content {
  padding: 3rem 2.5rem 5rem;
}
#login .login-card #email,
#login .login-card #password,
#login .login-card #firstName,
#login .login-card #lastName {
  display: block;
  width: 100%;
  font-size: 1rem;
  margin-bottom: 1.75rem;
  padding: 0.25rem 0;
  border: none;
  border-bottom: 1px solid #dbdbdb;
  transition: all 0.5s;
}
#login .login-card #email:hover,
#login .login-card #password:hover,
#login .login-card #firstName:hover,
#login .login-card #lastName:hover {
  border-color: #7a7a7a;
}
#login .login-card #email:active,
#login .login-card #password:active,
#login .login-card #email:focus,
#login .login-card #password:focus,
#login .login-card #firstName:active,
#login .login-card #lastName:active,
#login .login-card #firstName:focus,
#login .login-card #lastName:focus {
  border-color: #9c1be4;
}
#login .login-card .checkbox {
  color: #b5b5b5;
  font-size: 0.8rem;
}
#login .login-card .checkbox span {
  margin-left: 0.5rem;
}
#login .login-card a {
  font-size: 0.8rem;
}
#login .login-card .options {
  color: #b5b5b5;
  margin-bottom: 1.5rem;
}
#login .login-card button {
  cursor: pointer;
  font-size: 1.2rem;
  color: #7447bb;
  border-radius: 4rem;
  display: block;
  width: 100%;
  background: transparent;
  border: 2px solid #7447bb;
  padding: 0.9rem 0 1.1rem;
  transition: color 0.5s, border-color 0.5s;
}
#login .login-card button:hover,
#login .login-card button:focus {
  color: #9c1be4;
  border-color: #9c1be4;
}
#login .login-card button:active {
  transform: translateY(1px);
}
label {
  cursor: pointer;
}
.regular-checkbox {
  display: none;
}
.regular-checkbox + label {
  background-color: #fafafa;
  border: 1px solid #dbdbdb;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  padding: 7px;
  border-radius: 3px;
  display: inline-block;
  position: relative;
}
.regular-checkbox:checked + label {
  background-color: #e9ecee;
}
.regular-checkbox:checked + label:after {
  content: '\2714';
  font-size: 11px;
  position: absolute;
  top: 0;
  left: 3px;
  color: #b5b5b5;
}
input:focus,
select:focus,
textarea:focus,
button:focus {
  outline: none;
}
</style>
