import axios from 'axios'

export const auth = axios.create({
  baseURL: 'auth'
})

export const twitter = axios.create({
  baseURL: 'https://api.twitter.com/1.1'
})
