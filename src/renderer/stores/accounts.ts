import Twitter, { IToken } from '@/utils/twitter'
import { shell } from 'electron'
import { action, computed, observable } from 'mobx'

const key = localStorage.getItem('TWITTER_CONSUMER_KEY')
const secret = localStorage.getItem('TWITTER_CONSUMER_SECRET')

const twitter = new Twitter({
  consumer_key: key ? key : '',
  consumer_secret: secret ? secret : ''
})

class Accounts {
  @observable.deep
  public users: any[] = []

  @observable.deep
  public token: IToken = {
    oauth_token: '',
    oauth_token_secret: ''
  }

  @computed
  get is_users() {
    return this.users.length > 0
  }

  @action.bound
  public async openAuthorize() {
    const token = await twitter.getRequestToken()
    const url = twitter.getAuthorize(token)
    this.token = token
    shell.openExternal(url)
  }

  @action.bound
  public async addAccount(verifier: string) {
    const token = await twitter.getAccessToken({
      ...this.token,
      verifier
    })

    this.users.push(token)

    this.token = {
      oauth_token: '',
      oauth_token_secret: ''
    }
  }

  @action.bound
  public async removeAccount(index: number) {
    this.users.splice(index, 1)
  }
}

export default new Accounts()
