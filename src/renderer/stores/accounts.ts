import Twitter from '@/utils/twitter'
import { config } from 'dotenv'
import { shell } from 'electron'
import { action, computed, observable } from 'mobx'
import path from 'path'

declare var __static: string

const env = config({ path: path.join(__static, '.env') })

const twitter = new Twitter({
  consumer_key: env.parsed ? env.parsed.TWITTER_CONSUMER_KEY : '',
  consumer_secret: env.parsed ? env.parsed.TWITTER_CONSUMER_SECRET : ''
})

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
