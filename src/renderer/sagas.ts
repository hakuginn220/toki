import * as accounts from '@/modules/accounts'
import twitter from '@/utils/twitter'
import { shell } from 'electron'
import {
  call,
  CallEffect,
  ForkEffect,
  put,
  PutEffect,
  takeLatest
} from 'redux-saga/effects'

type TGetAuthorize =
  | CallEffect
  | PutEffect<accounts.IGetAuthorizeFailure>
  | PutEffect<accounts.IGetAuthorizeSuccess>

function* getAuthorize(): IterableIterator<TGetAuthorize> {
  try {
    const url = yield call(twitter.getAuthorizeURL)
    shell.openExternal(url)
    yield put(accounts.getAuthorizeSuccess())
  } catch (e) {
    yield put(accounts.getAuthorizeFailure(e))
  }
}

type TGetOAuth =
  | PutEffect<accounts.IGetOAuthFailure>
  | PutEffect<accounts.IGetOAuthSuccess>

function* getOAuth(): IterableIterator<TGetOAuth> {
  try {
    yield put(accounts.getOAuthSuccess())
  } catch (e) {
    yield put(accounts.getOAuthFailure(e))
  }
}

export default function* rootSaga(): IterableIterator<ForkEffect> {
  yield takeLatest(accounts.ActionTypes.GET_AUTHORIZE, getAuthorize)
  yield takeLatest(accounts.ActionTypes.GET_OAUTH, getOAuth)
}
