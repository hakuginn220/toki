import { ITwitterAccessToken } from '@/utils/twitter'
import produce from 'immer'
import { Action, Reducer } from 'redux'

export enum ActionTypes {
  GET_AUTHORIZE = 'accounts/GET_AUTHORIZE',
  GET_AUTHORIZE_SUCCESS = 'accounts/GET_AUTHORIZE_SUCCESS',
  GET_AUTHORIZE_FAILURE = 'accounts/GET_AUTHORIZE_FAILURE',
  GET_OAUTH = 'accounts/GET_OAUTH',
  GET_OAUTH_SUCCESS = 'accounts/GET_OAUTH_SUCCESS',
  GET_OAUTH_FAILURE = 'accounts/GET_OAUTH_FAILURE',
  ADD_ACCOUNT = 'accounts/ADD_ACCOUNT',
  REMOVE_ACCOUNT = 'accounts/REMOVE_ACCOUNT',
  CHANGE_VERIFIER = 'accounts/CHANGE_VERIFIER'
}

export interface IGetAuthorize extends Action<ActionTypes.GET_AUTHORIZE> {}

export interface IGetAuthorizeSuccess
  extends Action<ActionTypes.GET_AUTHORIZE_SUCCESS> {}

export interface IGetAuthorizeFailure
  extends Action<ActionTypes.GET_AUTHORIZE_FAILURE> {
  error: boolean
  payload: Error
}

export interface IGetOAuth extends Action<ActionTypes.GET_OAUTH> {}

export interface IGetOAuthSuccess
  extends Action<ActionTypes.GET_OAUTH_SUCCESS> {}

export interface IGetOAuthFailure
  extends Action<ActionTypes.GET_OAUTH_FAILURE> {
  error: boolean
  payload: Error
}

export interface IAddAccount extends Action<ActionTypes.ADD_ACCOUNT> {
  payload: { user: ITwitterAccessToken }
}

export interface IRemoveAccount extends Action<ActionTypes.REMOVE_ACCOUNT> {
  payload: { index: number }
}

export interface IChangeVerifier extends Action<ActionTypes.CHANGE_VERIFIER> {
  payload: { verifier: string }
}

export type TActions =
  | IGetAuthorize
  | IGetAuthorizeSuccess
  | IGetAuthorizeFailure
  | IGetOAuth
  | IGetOAuthSuccess
  | IGetOAuthFailure
  | IAddAccount
  | IRemoveAccount
  | IChangeVerifier

export function getAuthorize(): IGetAuthorize {
  return { type: ActionTypes.GET_AUTHORIZE }
}

export function getAuthorizeSuccess(): IGetAuthorizeSuccess {
  return { type: ActionTypes.GET_AUTHORIZE_SUCCESS }
}

export function getAuthorizeFailure(payload: Error): IGetAuthorizeFailure {
  return { error: true, payload, type: ActionTypes.GET_AUTHORIZE_FAILURE }
}

export function getOAuth(): IGetOAuth {
  return { type: ActionTypes.GET_OAUTH }
}

export function getOAuthSuccess(): IGetOAuthSuccess {
  return { type: ActionTypes.GET_OAUTH_SUCCESS }
}

export function getOAuthFailure(payload: Error): IGetOAuthFailure {
  return { error: true, payload, type: ActionTypes.GET_OAUTH_FAILURE }
}

export function addAccount(user: ITwitterAccessToken): IAddAccount {
  return { payload: { user }, type: ActionTypes.ADD_ACCOUNT }
}

export function removeAccount(index: number): IRemoveAccount {
  return { payload: { index }, type: ActionTypes.REMOVE_ACCOUNT }
}

export function changeVerifier(verifier: string): IChangeVerifier {
  return { payload: { verifier }, type: ActionTypes.CHANGE_VERIFIER }
}

export interface IState {
  users: ITwitterAccessToken[]
  verifier: string
}

export const initialState: IState = {
  users: [],
  verifier: ''
}

const reducer: Reducer<IState, TActions> = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ActionTypes.ADD_ACCOUNT:
        draft.users.push(action.payload.user)
        break

      case ActionTypes.REMOVE_ACCOUNT:
        draft.users.splice(action.payload.index, 1)
        break

      case ActionTypes.CHANGE_VERIFIER:
        draft.verifier = action.payload.verifier
        break

      default:
        break
    }
  })

export default reducer
