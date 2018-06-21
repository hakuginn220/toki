import { remote, shell } from 'electron'
import { observable, action } from 'mobx'

type TAccessToken = {
  access_token: string
  access_token_secret: string
}[]

type TToken = {
  oauth_token: string
  oauth_token_secret: string
}

type TUsers = TAccessToken[]

export default class Auth {
  @observable users: TUsers = []

  @observable
  token: TToken = {
    oauth_token: '',
    oauth_token_secret: ''
  }

  @action.bound
  async openAuthorize() {
    const { twitter } = remote.require('./main')
    const token: TToken = await twitter.getRequestToken()
    const url = twitter.getAuthorize(token)
    this.token = token
    shell.openExternal(url)
  }

  @action.bound
  async getAccessToken(verifier: string) {
    const twitter = remote.getGlobal('twitter')
    const token: TAccessToken = await twitter.getAccessToken({
      ...this.token,
      verifier
    })
    this.users.push(token)
  }
}
