import * as accounts from '@/modules/accounts'
import { IRootState } from '@/store'
import twitter from '@/utils/twitter'
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
    const user = yield call(twitter.getAccessToken, verifier)
    yield put(accounts.getOAuthSuccess())
    yield put(accounts.addAccount(user))
  } catch (e) {
    yield put(accounts.getOAuthFailure(e))
  }
}

export default function* rootSaga(): IterableIterator<ForkEffect> {
  yield takeLatest(accounts.ActionTypes.GET_AUTHORIZE, getAuthorize)
  yield takeLatest(accounts.ActionTypes.GET_OAUTH, getOAuth)
}
