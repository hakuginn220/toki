import { TWITTER_CONSUMER_KEY, TWITTER_CONSUMER_SECRET } from '@/utils/dotenv'
import { OAuth } from 'oauth'
import url from 'url'

interface ITwitterAccessToken {
  access_token: string
  access_token_secret: string
}

class Twitter {
  private hostname: string = 'api.twitter.com'
  private version: string = '1.1'
  private token: string = ''
  private secret: string = ''
  private client: OAuth

  constructor() {
    this.client = new OAuth(
      `https://${this.hostname}/oauth/request_token`,
      `https://${this.hostname}/oauth/access_token`,
      TWITTER_CONSUMER_KEY ? TWITTER_CONSUMER_KEY : '',
      TWITTER_CONSUMER_SECRET ? TWITTER_CONSUMER_SECRET : '',
      '1.0A',
      null,
      'HMAC-SHA1'
    )
  }

  public getAuthorizeURL(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.client.getOAuthRequestToken((err, oauthToken, oauthTokenSecret) => {
        if (err) {
          return reject(err)
        }

        this.token = oauthToken
        this.secret = oauthTokenSecret

        const endpoint = url.format({
          hostname: this.hostname,
          pathname: 'oauth/authorize',
          protocol: 'https',
          query: { oauth_token: this.token }
        })

        resolve(endpoint)
      })
    })
  }

  public getAccessToken(verifier: string): Promise<ITwitterAccessToken> {
    return new Promise((resolve, reject) => {
      if (this.token === '') {
        reject(new Error('OAuth request token not found.'))
      }

      if (this.secret === '') {
        reject(new Error('OAuth request token secret not found.'))
      }

      this.client.getOAuthAccessToken(
        this.token,
        this.secret,
        verifier,
        (err, accessToken, accessTokenSecret) => {
          if (err) {
            return reject(err)
          }

          this.token = ''
          this.secret = ''

          resolve({
            access_token: accessToken,
            access_token_secret: accessTokenSecret
          })
        }
      )
    })
  }

  public get(
    token: ITwitterAccessToken,
    resource: string,
    query: object
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      const endpoint = url.format({
        hostname: this.hostname,
        pathname: `${this.version}/${resource}.json`,
        protocol: 'https',
        query
      })

      this.client.get(
        endpoint,
        token.access_token,
        token.access_token_secret,
        (err, data) => {
          if (err) {
            return reject(err)
          }

          resolve(data)
        }
      )
    })
  }

  public post(
    token: ITwitterAccessToken,
    resource: string,
    body: object
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      const endpoint = url.format({
        hostname: this.hostname,
        pathname: `${this.version}/${resource}.json`,
        protocol: 'https'
      })

      this.client.post(
        endpoint,
        token.access_token,
        token.access_token_secret,
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

  public put(
    token: ITwitterAccessToken,
    resource: string,
    body: object
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      const endpoint = url.format({
        hostname: this.hostname,
        pathname: `${this.version}/${resource}.json`,
        protocol: 'https'
      })

      this.client.put(
        endpoint,
        token.access_token,
        token.access_token_secret,
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

  public delete(token: ITwitterAccessToken, resource: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const endpoint = url.format({
        hostname: this.hostname,
        pathname: `${this.version}/${resource}.json`,
        protocol: 'https'
      })

      this.client.delete(
        endpoint,
        token.access_token,
        token.access_token_secret,
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

export default new Twitter()
