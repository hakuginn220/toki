import Twitter from '@/twitter'
import { remote, shell } from 'electron'
import { action, computed, observable } from 'mobx'

const twitter: Twitter = remote.getGlobal('twitter')

class Accounts {
  @observable.deep
  public users: any[] = []

  @computed
  get is_users() {
    return this.users.length > 0
  }

  @action.bound
  public async openAuthorize() {
    const url = await twitter.getAuthorizeURL()
    shell.openExternal(url)
  }

  @action.bound
  public async addAccount(verifier: string) {
    const token = await twitter.getAccessToken(verifier)
    this.users.push(token)
  }

  @action.bound
  public async removeAccount(index: number) {
    this.users.splice(index, 1)
  }
}

export default new Accounts()
