import Twitter from '@/utils/twitter'
import { shell } from 'electron'
import { action, observable } from 'mobx'

const key = localStorage.getItem('TWITTER_CONSUMER_KEY')
const secret = localStorage.getItem('TWITTER_CONSUMER_SECRET')

const twitter = new Twitter({
  consumer_key: key ? key : '',
  consumer_secret: secret ? secret : ''
})

export default class Auth {
  @observable.deep
  public users: any[] = []

  @observable.deep
  public token: any

  @action.bound
  public async openAuthorize() {
    const token = await twitter.getRequestToken()
    const url = twitter.getAuthorize(token)
    this.token = token
    shell.openExternal(url)
  }

  @action.bound
  public async getAccessToken(verifier: string) {
    const token = await twitter.getAccessToken({
      ...this.token,
      verifier
    })
    this.users.push(token)
  }
}
