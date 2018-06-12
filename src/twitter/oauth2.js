import { remote } from 'electron'

const oa = remote.getGlobal('TWITTER_OAUTH2')

export function postToken() {
  return new Promise((resolve, reject) => {
    oa.getOAuthAccessToken(
      '',
      { grant_type: 'client_credentials' },
      (err, accessToken) => {
        if (err) return reject(err)
        resolve({ accessToken })
      }
    )
  })
}
