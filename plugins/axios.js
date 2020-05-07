import axios from 'axios'
const instance = axios.create({
  baseURL: 'http://192.168.0.119:3000',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json'
  }
  // baseURL: process.env.Api
})

export default instance
