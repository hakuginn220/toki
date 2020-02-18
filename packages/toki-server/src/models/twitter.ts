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

      const endpoint = `https://api.twitter.com/oauth/authorize?oauth_token=${token}`

      resolve({ endpoint, token, secret })
    })
  })
}

export function getAccessToken(
  code: string,
  token: string,
  secret: string
): Promise<{
  accessToken: string
  accessTokenSecret: string
}> {
  return new Promise((resolve, reject) => {
    client.getOAuthAccessToken(
      token,
      secret,
      code,
      (err, accessToken, accessTokenSecret) => {
        if (err) return reject(err)

        resolve({ accessToken, accessTokenSecret })
      }
    )
  })
}
