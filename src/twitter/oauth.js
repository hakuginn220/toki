import { remote, shell } from 'electron'

const oa = remote.getGlobal('TWITTER_OAUTH')

export function postRequestToken() {
  return new Promise((resolve, reject) => {
    oa.getOAuthRequestToken((err, oauthToken, oauthTokenSecret, results) => {
      if (err) return reject(err)
      resolve({ oauthToken, oauthTokenSecret })
    })
  })
}

export function postAccessToken({
  oauthToken,
  oauthTokenSecret,
  oauthVerifier
}) {
  return new Promise((resolve, reject) => {
    oa.getOAuthAccessToken(
      oauthToken,
      oauthTokenSecret,
      oauthVerifier,
      (err, accessToken, accessTokenSecret, results) => {
        if (err) return reject(err)
        console.log(results)
        resolve({ accessToken, accessTokenSecret })
      }
    )
  })
}

export function getAuthorize({ oauthToken, oauthTokenSecret }) {
  const endpoint = `https://api.twitter.com/oauth/authorize`
  const url = oa.signUrl(endpoint, oauthToken, oauthTokenSecret)
  shell.openExternal(url)
}
