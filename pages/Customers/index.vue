<template>
  <div class="customers">
    <div class="columns category-header">
      <div class="column main-column is-tablet-landscape-padded">
        <div class="category-title is-product-category">
          <h2>Customers</h2>
        </div>
        <div class="listing-controls">
          <div class="layout-controls">
            <!--<label class="checkbox">
              <input type="checkbox" /> Select all
            </label>-->
          </div>

          <button v-on:click="toggleModal" class="button is-success is-outlined">+ Add Customer</button>
          <div class="modal" :class="{'is-active': showModal}">
            <div class="modal-background"></div>
            <div class="modal-card">
              <header class="modal-card-head">
                <p class="modal-card-title">Add Customer</p>
                <button v-on:click="toggleModal" class="delete" aria-label="close"></button>
              </header>
              <section class="modal-card-body">
                <div class="field">
                  <label class="label">First Name</label>
                  <div class="control">
                    <input v-model="firstName" class="input" type="text" />
                  </div>
                  <label class="label">Last Name</label>
                  <div class="control">
                    <input v-model="lastName" class="input" type="text" />
                  </div>
                  <label class="label">Street</label>
                  <div class="control">
                    <input v-model="street" class="input" type="text" />
                  </div>
                  <label class="label">Number</label>
                  <div class="control">
                    <input v-model="number" class="input" type="text" />
                  </div>
                  <label class="label">Zip Code</label>
                  <div class="control">
                    <input v-model="zipCode" class="input" type="text" />
                  </div>
                  <label class="label">City</label>
                  <div class="control">
                    <input v-model="city" class="input" type="text" />
                  </div>
                  <label class="label">Company Name</label>
                  <div class="control">
                    <input v-model="companyName" class="input" type="text" />
                  </div>
                  <label class="label">Vat N0.</label>
                  <div class="control">
                    <input v-model="vatNumber" class="input" type="text" />
                  </div>
                </div>
              </section>
              <footer class="modal-card-foot">
                <button v-on:click="createCustomer" class="button is-success">Add</button>
                <button v-on:click="toggleModal" class="button">Cancel</button>
              </footer>
            </div>
          </div>
          <div class="sort-box">
            <div class="dropdown is-hoverable is-right pull-right">
              <div class="dropdown-trigger">
                <button
                  class="button icon-button"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu4"
                >
                  <span>Sort By</span>
                  <span class="icon is-small">
                    <font-awesome-icon class="icon" :icon="['fas', 'chevron-down']" />
                  </span>
                </button>
              </div>
              <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                <div class="dropdown-content">
                  <div class="dropdown-item">
                    <p>Name A-Z</p>
                  </div>
                  <div class="dropdown-item">
                    <p>Name Z-A</p>
                  </div>
                  <div class="dropdown-item">
                    <p>Price Asc</p>
                  </div>
                  <div class="dropdown-item">
                    <p>Price Desc</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="columns is-product-list is-multiline spacer">
          <div class="column is-10">
            <ul>
              <li class="list-view" v-for=" customer in customers" :key="customer._id">
                <div class="columns">
                  <div class="column is-1">
                    <label class="checkbox">
                      <input type="checkbox" />
                    </label>
                  </div>
                  <div class="column">
                    <nuxt-link
                      :to="{ name: 'Customers-id', params: { id: customer._id } }"
                    >{{customer.companyName}}</nuxt-link>
                  </div>
                  <div class="column">{{customer.lastName}} {{customer.firstName}}</div>
                  <div
                    class="column"
                  >{{customer.street}} {{customer.number}} {{customer.zipCode}} {{customer.city}}</div>
                  <div class="column is-1 is-right">
                    <div class="dropdown is-hoverable is-right pull-right">
                      <div class="dropdown-trigger">
                        <button
                          class="button icon-button is-small"
                          aria-haspopup="true"
                          aria-controls="dropdown-menu4"
                        >
                          <font-awesome-icon class="icon is-small" :icon="['fas', 'ellipsis-h']" />
                        </button>
                      </div>
                      <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                        <div class="dropdown-content">
                          <div class="dropdown-item">
                            <nuxt-link to="/profile">Edit</nuxt-link>
                          </div>
                          <div class="dropdown-item">
                            <a v-on:click="deleteCustomer(customer._id)">Delete</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
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
      customers: null,
      showModal: false,
      firstName: null,
      lastName: null,
      street: null,
      number: null,
      zipCode: null,
      city: null,
      companyName: null,
      vatNumber: null
    }
  },
  // Get all customers
  async asyncData() {
    let result = await axios.get('customers')
    return { customers: result.data }
  },
  methods: {
    toggleModal(): void {
      this.showModal = !this.showModal
    },
    async deleteCustomer(id: string) {
      let r = await axios.delete('customers/' + id)
    },
    async createCustomer() {
      console.log('Start')
      const c = {
        firstName: this.firstName,
        lastName: this.lastName,
        street: this.street,
        number: this.number,
        zipCode: this.zipCode,
        city: this.city,
        companyName: this.companyName,
        vatNumber: this.vatNumber
      }
      let result = await axios.post('customers', c)
      if (result.data.id) {
        this.toggleModal()
      }
      return null
    }
  }
})
</script>
<style scoped>
.list-view {
  background-color: white;
  padding: 0 20px;
  -webkit-border-radius: 50px !important;
  -moz-border-radius: 50px !important;
  border-radius: 50px !important;
  margin: 20px 0px;
  height: 50px;
}
.spacer {
  margin-left: 15px;
  margin-right: 15px;
  justify-content: center;
}
.icon-button {
  border: none;
  background-color: transparent;
}
.rounded {
  -webkit-border-radius: 50px !important;
  -moz-border-radius: 50px !important;
  border-radius: 50px !important;
}
.category-header .category-title.is-product-category {
  margin: 10px 0 !important;
}
.category-header .category-title {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin: 20px 0;
  position: relative;
}
.category-header .category-title h2 {
  width: 100%;
  color: #4a4a4a;
  margin-left: 15px;
}
.category-header h2 {
  font-size: 1.8rem;
  font-family: 'Raleway', sans-serif;
  font-weight: 400 !important;
  line-height: 1.2;
  text-transform: uppercase;
}
.listing-controls {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 10px 0;
  border-top: 1px solid #d6d6d6;
  line-height: 16px;
  margin-left: 15px;
  padding: 10px 40px;
}
.listing-controls .layout-controls {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.sort-box {
  position: relative;
  max-width: 200px;
}
.flat-card.is-list-item:first-child {
  margin-top: 0 !important;
}
.flat-card.is-list-item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: auto !important;
  padding: 20px 40px;
  margin-top: 20px;
}
.flat-card.is-auto {
  height: 60px !important;
  width: 100% !important;
  min-height: 0 !important;
  max-height: none !important;
  max-width: auto !important;
}
.flat-card {
  position: relative;
  background-color: #fff;
  border: 1px solid #ededed;
  border-radius: 0.1875rem;
  display: inline-block;
  position: relative;
  overflow: hidden;
  width: 100%;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  max-height: 270px;
  min-height: 270px;
}
.flat-card.is-list-item .product-info {
  padding: 20px 40px !important;
  margin-right: 50px;
}
.flat-card.is-list-item span {
  display: block;
}
.flat-card .product-info {
  padding: 0 20px;
}
.flat-card.is-list-item .product-abstract {
  margin-left: auto;
  padding: 15px 0;
  width: 40%;
  color: #999;
  font-size: 0.8rem;
}
</style>
