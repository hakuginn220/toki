import * as accounts from '@/modules/accounts'
import { IRootState } from '@/store'
import twitter from '@/utils/twitter'
import { ITwitterUser } from '@/utils/types'
import { shell } from 'electron'
import {
  call,
  Effect,
  ForkEffect,
  put,
  select,
  takeLatest
} from 'redux-saga/effects'

function* getAuthorize(): IterableIterator<Effect> {
  try {
    const url = yield call(twitter.getAuthorizeURL)
    shell.openExternal(url)
    yield put(accounts.getAuthorizeSuccess())
  } catch (e) {
    yield put(accounts.getAuthorizeFailure(e))
  }
}

function* getOAuth(): IterableIterator<Effect> {
  try {
    const verifier = yield select<IRootState>(state => state.accounts.verifier)
    const token = yield call(twitter.getAccessToken, verifier)
    const user: ITwitterUser = yield call(
      twitter.get,
      token,
      'account/verify_credentials'
    )

    yield put(accounts.getOAuthSuccess())
    yield put(
      accounts.addAccount({
        access_token: token.access_token,
        access_token_secret: token.access_token_secret,
        id: user.id_str,
        name: user.name,
        profile_image_url: user.profile_image_url_https.replace('_normal', ''),
        screen_name: user.screen_name
      })
    )
  } catch (e) {
    yield put(accounts.getOAuthFailure(e))
  }
}

export default function* rootSaga(): IterableIterator<ForkEffect> {
  yield takeLatest(accounts.ActionTypes.GET_AUTHORIZE, getAuthorize)
  yield takeLatest(accounts.ActionTypes.GET_OAUTH, getOAuth)
}
