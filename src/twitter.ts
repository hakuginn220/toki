import * as url from 'url'
import { OAuth } from 'oauth'

type Token = {
  oauth_token: string
  oauth_token_secret: string
}

type AccessToken = {
  access_token: string
  access_token_secret: string
}

type TwitterConfig = AccessToken & {
  consumer_key: string
  consumer_secret: string
}

export default class Twitter {
  config: TwitterConfig
  client: OAuth
  hostname: string
  version: string

  constructor(config: {
    consumer_key: string
    consumer_secret: string
    access_token?: string
    access_token_secret?: string
  }) {
    const defaults = {
      consumer_key: '',
      consumer_secret: '',
      access_token: '',
      access_token_secret: ''
    }

    this.config = { ...defaults, ...config }

    this.hostname = 'api.twitter.com'
    this.version = '1.1'

    this.client = new OAuth(
      `${this.hostname}/oauth/request_token`,
      `${this.hostname}/oauth/access_token`,
      this.config.consumer_key,
      this.config.consumer_secret,
      '1.0A',
      null,
      'HMAC-SHA1'
    )
  }

  getRequestToken(): Promise<Token> {
    return new Promise((resolve, reject) => {
      this.client.getOAuthRequestToken(
        (err, oauth_token, oauth_token_secret) => {
          if (err) return reject(err)
          resolve({ oauth_token, oauth_token_secret })
        }
      )
    })
  }

  getAuthorize({ oauth_token }: { oauth_token: string }): string {
    return url.format({
      protocol: 'https',
      hostname: this.hostname,
      pathname: 'oauth/authorize',
      query: {
        oauth_token
      }
    })
  }

  getAccessToken({
    oauth_token,
    oauth_token_secret,
    verifier
  }: Token & {
    verifier: string
  }): Promise<AccessToken> {
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

  setAccessToken({ access_token, access_token_secret }: AccessToken) {
    this.config.access_token = access_token
    this.config.access_token = access_token_secret
  }

  get(resource: string, query: object): Promise<any> {
    return new Promise((resolve, reject) => {
      const endpoint = url.format({
        protocol: 'https',
        hostname: this.hostname,
        pathname: `${this.version}/${resource}.json`,
        query
      })

      this.client.get(
        endpoint,
        this.config.access_token,
        this.config.access_token_secret,
        (err, data) => {
          if (err) reject(err)
          resolve(data)
        }
      )
    })
  }

  post(resource: string, body: object): Promise<any> {
    return new Promise((resolve, reject) => {
      const endpoint = url.format({
        protocol: 'https',
        host: this.hostname,
        pathname: `${this.version}/${resource}.json`
      })

      this.client.post(
        endpoint,
        this.config.access_token,
        this.config.access_token_secret,
        body,
        undefined,
        (err, data) => {
          if (err) reject(err)
          resolve(data)
        }
      )
    })
  }

  put(resource: string, body: object): Promise<any> {
    return new Promise((resolve, reject) => {
      const endpoint = url.format({
        protocol: 'https',
        host: this.hostname,
        pathname: `${this.version}/${resource}.json`
      })

      this.client.put(
        endpoint,
        this.config.access_token,
        this.config.access_token_secret,
        body,
        undefined,
        (err, data) => {
          if (err) reject(err)
          resolve(data)
        }
      )
    })
  }

  delete(resource: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const endpoint = url.format({
        protocol: 'https',
        host: this.hostname,
        pathname: `${this.version}/${resource}.json`
      })

      this.client.delete(
        endpoint,
        this.config.access_token,
        this.config.access_token_secret,
        (err, data) => {
          if (err) reject(err)
          resolve(data)
        }
      )
    })
  }
}
