import { remote, shell } from 'electron'
import { observable, action } from 'mobx'
import { Main } from '../main'
import { Token, AccessToken } from '../twitter'

export default class Auth {
  @observable users: AccessToken[] = []

  @observable
  token: Token = {
    oauth_token: '',
    oauth_token_secret: ''
  }

  @action.bound
  async openAuthorize() {
    const { twitter }: Main = remote.require('./main')
    const token = await twitter.getRequestToken()
    const url = twitter.getAuthorize(token)
    this.token = token
    shell.openExternal(url)
  }

  @action.bound
  async getAccessToken(verifier: string) {
    const { twitter }: Main = remote.require('./main')
    const token = await twitter.getAccessToken({
      ...this.token,
      verifier
    })
    this.users.push(token)
  }
}
