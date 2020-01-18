import url from 'url'
import { config } from 'dotenv'
import { OAuth } from 'oauth'

const { parsed } = config()

let token: string = ''
let secret: string = ''

const client = new OAuth(
  `https://api.twitter.com/oauth/request_token`,
  `https://api.twitter.com/oauth/access_token`,
  parsed ? parsed.TWITTER_CONSUMER_KEY : '',
  parsed ? parsed.TWITTER_CONSUMER_SECRET : '',
  '1.0A',
  null,
  'HMAC-SHA1'
)

export function getAuthorizeUrl(): Promise<string> {
  return new Promise((resolve, reject) => {
    client.getOAuthRequestToken((err, oauthToken, oauthTokenSecret) => {
      if (err) return reject(err)

      token = oauthToken
      secret = oauthTokenSecret

      const endpoint = url.format({
        hostname: 'api.twitter.com',
        pathname: 'oauth/authorize',
        protocol: 'https',
        query: { oauth_token: token }
      })

      resolve(endpoint)
    })
  })
}

export function getAccessToken(
  verifier: string
): Promise<{
  accessToken: string
  accessTokenSecret: string
}> {
  return new Promise((resolve, reject) => {
    client.getOAuthAccessToken(
      token,
      secret,
      verifier,
      (err, accessToken, accessTokenSecret) => {
        if (err) return reject(err)

        token = ''
        secret = ''

        resolve({ accessToken, accessTokenSecret })
      }
    )
  })
}
