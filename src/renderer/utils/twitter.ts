import { OAuth } from 'oauth'
import * as url from 'url'

interface IToken {
  oauth_token: string
  oauth_token_secret: string
}

interface IAccessToken {
  access_token: string
  access_token_secret: string
}

export default class Twitter {
  private config: IAccessToken & {
    consumer_key: string
    consumer_secret: string
  }
  private client: OAuth
  private hostname: string
  private version: string

  constructor(config: {
    consumer_key: string
    consumer_secret: string
    access_token?: string
    access_token_secret?: string
  }) {
    const defaults = {
      access_token: '',
      access_token_secret: '',
      consumer_key: '',
      consumer_secret: ''
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

  public getRequestToken(): Promise<IToken> {
    return new Promise((resolve, reject) => {
      this.client.getOAuthRequestToken((err, oauthToken, oauthTokenSecret) => {
        if (err) {
          return reject(err)
        }
        resolve({
          oauth_token: oauthToken,
          oauth_token_secret: oauthTokenSecret
        })
      })
    })
  }

  public getAuthorize({ oauth_token }: { oauth_token: string }): string {
    return url.format({
      hostname: this.hostname,
      pathname: 'oauth/authorize',
      protocol: 'https',
      query: {
        oauth_token
      }
    })
  }

  public getAccessToken({
    oauth_token,
    oauth_token_secret,
    verifier
  }: IToken & {
    verifier: string
  }): Promise<IAccessToken> {
    return new Promise((resolve, reject) => {
      this.client.getOAuthAccessToken(
        oauth_token,
        oauth_token_secret,
        verifier,
        (err, accessToken, accessTokenSecret) => {
          if (err) {
            return reject(err)
          }
          resolve({
            access_token: accessToken,
            access_token_secret: accessTokenSecret
          })
        }
      )
    })
  }

  public setAccessToken({ access_token, access_token_secret }: IAccessToken) {
    this.config.access_token = access_token
    this.config.access_token = access_token_secret
  }

  public get(resource: string, query: object): Promise<any> {
    return new Promise((resolve, reject) => {
      const endpoint = url.format({
        hostname: this.hostname,
        pathname: `${this.version}/${resource}.json`,
        protocol: 'https',
        query
      })

      this.client.get(
        endpoint,
        this.config.access_token,
        this.config.access_token_secret,
        (err, data) => {
          if (err) {
            return reject(err)
          }
          resolve(data)
        }
      )
    })
  }

  public post(resource: string, body: object): Promise<any> {
    return new Promise((resolve, reject) => {
      const endpoint = url.format({
        hostname: this.hostname,
        pathname: `${this.version}/${resource}.json`,
        protocol: 'https'
      })

      this.client.post(
        endpoint,
        this.config.access_token,
        this.config.access_token_secret,
        body,
        undefined,
        (err, data) => {
          if (err) {
            return reject(err)
          }
          resolve(data)
        }
      )
    })
  }

  public put(resource: string, body: object): Promise<any> {
    return new Promise((resolve, reject) => {
      const endpoint = url.format({
        hostname: this.hostname,
        pathname: `${this.version}/${resource}.json`,
        protocol: 'https'
      })

      this.client.put(
        endpoint,
        this.config.access_token,
        this.config.access_token_secret,
        body,
        undefined,
        (err, data) => {
          if (err) {
            return reject(err)
          }
          resolve(data)
        }
      )
    })
  }

  public delete(resource: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const endpoint = url.format({
        hostname: this.hostname,
        pathname: `${this.version}/${resource}.json`,
        protocol: 'https'
      })

      this.client.delete(
        endpoint,
        this.config.access_token,
        this.config.access_token_secret,
        (err, data) => {
          if (err) {
            return reject(err)
          }
          resolve(data)
        }
      )
    })
  }
}
