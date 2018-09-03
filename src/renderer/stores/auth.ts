import { IMain } from '@/main'
import { remote, shell } from 'electron'
import { action, observable } from 'mobx'

export default class Auth {
  @observable.deep
  public users: any[] = []

  @observable.deep
  public token: any

  @action.bound
  public async openAuthorize() {
    const { twitter }: IMain = remote.require('./main')
    const token = await twitter.getRequestToken()
    const url = twitter.getAuthorize(token)
    this.token = token
    shell.openExternal(url)
  }

  @action.bound
  public async getAccessToken(verifier: string) {
    const { twitter }: IMain = remote.require('./main')
    const token = await twitter.getAccessToken({
      ...this.token,
      verifier
    })
    this.users.push(token)
  }
}
