import url from 'url'
import { config } from 'dotenv'
import { OAuth } from 'oauth'

const { parsed } = config()

const client = new OAuth(
  `https://api.twitter.com/oauth/request_token`,
  `https://api.twitter.com/oauth/access_token`,
  parsed ? parsed.TWITTER_CONSUMER_KEY : '',
  parsed ? parsed.TWITTER_CONSUMER_SECRET : '',
  '1.0A',
  null,
  'HMAC-SHA1'
)

export function getAuthorizeUrl(): Promise<{
  endpoint: string
  token: string
  secret: string
}> {
  return new Promise((resolve, reject) => {
    client.getOAuthRequestToken((err, token, secret) => {
      if (err) return reject(err)

      const endpoint = url.format({
        hostname: 'api.twitter.com',
        pathname: 'oauth/authorize',
        protocol: 'https',
        query: { oauth_token: token }
      })

      resolve({ endpoint, token, secret })
    })
  })
}

export function getAccessToken(
  code: string,
  token: string,
  secret: string
): Promise<{
  access_token: string
  access_token_secret: string
}> {
  return new Promise((resolve, reject) => {
    client.getOAuthAccessToken(
      token,
      secret,
      code,
      (err, access_token, access_token_secret) => {
        if (err) return reject(err)

        resolve({ access_token, access_token_secret })
      }
    )
  })
}
