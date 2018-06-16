import url from 'url'
import { OAuth } from 'oauth'

export default class Twitter {
  constructor(config = {}) {
    const defaults = {
      consumer_key: null,
      consumer_secret: null,
      access_token: null,
      access_token_secret: null
    }

    this.config = Object.assign({}, defaults, config)

    this.hostname = 'api.twitter.com'
    this.version = '1.1'

    this.client = new OAuth(
      `${this.oauth}/oauth/request_token`,
      `${this.oauth}/oauth/access_token`,
      this.config.consumer_key,
      this.config.consumer_secret,
      '1.0A',
      null,
      'HMAC-SHA1'
    )
  }

  getRequestToken() {
    return new Promise((resolve, reject) => {
      this.client.getOAuthRequestToken(
        (err, oauth_token, oauth_token_secret) => {
          if (err) return reject(err)
          resolve({ oauth_token, oauth_token_secret })
        }
      )
    })
  }

  getAccessToken({ oauth_token = '', oauth_token_secret = '', verifier = '' }) {
    return new Promise((resolve, reject) => {
      this.client.getOAuthAccessToken(
        oauth_token,
        oauth_token_secret,
        verifier,
        (err, access_token, access_token_secret) => {
          if (err) return reject(err)
          resolve({ access_token, access_token_secret })
        }
      )
    })
  }

  setAccessToken({ access_token = '', access_token_secret = '' }) {
    this.config.access_token = access_token
    this.config.access_token = access_token_secret
  }

  get(resource = '', query = {}) {
    return new Promise((resolve, reject) => {
      const endpoint = url.format({
        protocol: 'https',
        hostname: this.hostname,
        pathname: `${this.version}/${resource}.json`,
        query
      })

      this.client.get(
        endpoint,
        this.access_token,
        this.access_token_secret,
        (err, data) => {
          if (err) reject(err)
          resolve(data)
        }
      )
    })
  }

  post(resource = '', body = {}) {
    return new Promise((resolve, reject) => {
      const endpoint = url.format({
        protocol: 'https',
        host: this.host,
        pathname: `${this.version}/${resource}.json`
      })

      this.client.post(
        endpoint,
        this.access_token,
        this.access_token_secret,
        body,
        (err, data) => {
          if (err) reject(err)
          resolve(data)
        }
      )
    })
  }

  put(resource = '', body = {}) {
    return new Promise((resolve, reject) => {
      const endpoint = url.format({
        protocol: 'https',
        host: this.host,
        pathname: `${this.version}/${resource}.json`
      })

      this.client.put(
        endpoint,
        this.access_token,
        this.access_token_secret,
        body,
        (err, data) => {
          if (err) reject(err)
          resolve(data)
        }
      )
    })
  }

  delete(resource = '') {
    const endpoint = url.format({
      protocol: 'https',
      host: this.host,
      pathname: `${this.version}/${resource}.json`
    })

    this.client.delete(
      endpoint,
      this.access_token,
      this.access_token_secret,
      (err, data) => {
        if (err) reject(err)
        resolve(data)
      }
    )
  }
}
