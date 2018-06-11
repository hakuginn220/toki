import { remote } from 'electron'

const oauth2 = remote.getGlobal('TWITTER_OAUTH_V2')

export function getOAuthAccessToken() {
  return new Promise((resolve, reject) => {
    oauth2.getOAuthAccessToken(
      '',
      { grant_type: 'client_credentials' },
      (err, accessToken) => {
        if (err) return reject(err)
        resolve(accessToken)
      }
    )
  })
}
