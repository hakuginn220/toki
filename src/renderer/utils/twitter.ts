import { TWITTER_CONSUMER_KEY, TWITTER_CONSUMER_SECRET } from '@/utils/dotenv'
import { ITwitterAccessToken } from '@/utils/types'
import { OAuth } from 'oauth'
import url from 'url'

const hostname = 'api.twitter.com'
const version = '1.1'

let token: string = ''
let secret: string = ''

const client = new OAuth(
  `https://${hostname}/oauth/request_token`,
  `https://${hostname}/oauth/access_token`,
  TWITTER_CONSUMER_KEY ? TWITTER_CONSUMER_KEY : '',
  TWITTER_CONSUMER_SECRET ? TWITTER_CONSUMER_SECRET : '',
  '1.0A',
  null,
  'HMAC-SHA1'
)

export default {
  getAuthorizeURL(): Promise<string> {
    return new Promise((resolve, reject) => {
      client.getOAuthRequestToken((err, oauthToken, oauthTokenSecret) => {
        if (err) {
          return reject(err)
        }

        token = oauthToken
        secret = oauthTokenSecret

        const endpoint = url.format({
          hostname,
          pathname: 'oauth/authorize',
          protocol: 'https',
          query: { oauth_token: token }
        })

        resolve(endpoint)
      })
    })
  },

  getAccessToken(verifier: string): Promise<ITwitterAccessToken> {
    return new Promise((resolve, reject) => {
      if (token === '') {
        reject(new Error('OAuth request token not found.'))
      }

      if (secret === '') {
        reject(new Error('OAuth request token secret not found.'))
      }

      client.getOAuthAccessToken(
        token,
        secret,
        verifier,
        (err, accessToken, accessTokenSecret) => {
          if (err) {
            return reject(err)
          }

          token = ''
          secret = ''

          resolve({
            access_token: accessToken,
            access_token_secret: accessTokenSecret
          })
        }
      )
    })
  },

  get(
    twitter: ITwitterAccessToken,
    resource: string,
    query: object = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      const endpoint = url.format({
        hostname,
        pathname: `${version}/${resource}.json`,
        protocol: 'https',
        query
      })

      client.get(
        endpoint,
        twitter.access_token,
        twitter.access_token_secret,
        (err, data) => {
          if (err) {
            return reject(err)
          }

          resolve(typeof data === 'string' ? JSON.parse(data) : data)
        }
      )
    })
  },

  post(
    twitter: ITwitterAccessToken,
    resource: string,
    body: object = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      const endpoint = url.format({
        hostname,
        pathname: `${version}/${resource}.json`,
        protocol: 'https'
      })

      client.post(
        endpoint,
        twitter.access_token,
        twitter.access_token_secret,
        body,
        undefined,
        (err, data) => {
          if (err) {
            return reject(err)
          }

          resolve(typeof data === 'string' ? JSON.parse(data) : data)
        }
      )
    })
  },

  put(
    twitter: ITwitterAccessToken,
    resource: string,
    body: object
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      const endpoint = url.format({
        hostname,
        pathname: `${version}/${resource}.json`,
        protocol: 'https'
      })

      client.put(
        endpoint,
        twitter.access_token,
        twitter.access_token_secret,
        body,
        undefined,
        (err, data) => {
          if (err) {
            return reject(err)
          }

          resolve(typeof data === 'string' ? JSON.parse(data) : data)
        }
      )
    })
  },

  delete(twitter: ITwitterAccessToken, resource: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const endpoint = url.format({
        hostname,
        pathname: `${version}/${resource}.json`,
        protocol: 'https'
      })

      client.delete(
        endpoint,
        twitter.access_token,
        twitter.access_token_secret,
        (err, data) => {
          if (err) {
            return reject(err)
          }

          resolve(typeof data === 'string' ? JSON.parse(data) : data)
        }
      )
    })
  }
}
