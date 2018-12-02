import { ITwitterAccessToken } from '@/utils/twitter'
import produce from 'immer'
import { Action, ActionCreator, Reducer } from 'redux'

export enum ActionTypes {
  OPEN_AUTHORIZE = 'OPEN_AUTHORIZE',
  ADD_ACCOUNT = 'ADD_ACCOUNT',
  REMOVE_ACCOUNT = 'REMOVE_ACCOUNT',
  CHANGE_VERIFIER = 'CHANGE_VERIFIER'
}

interface IOpenAuthorize extends Action<ActionTypes.OPEN_AUTHORIZE> {}

export const openAuthorize: ActionCreator<IOpenAuthorize> = () => ({
  type: ActionTypes.OPEN_AUTHORIZE
})

interface IAddAccount extends Action<ActionTypes.ADD_ACCOUNT> {
  payload: { user: ITwitterAccessToken }
}

export const addAccount: ActionCreator<IAddAccount> = (payload: {
  user: ITwitterAccessToken
}) => ({
  payload,
  type: ActionTypes.ADD_ACCOUNT
})

interface IRemoveAccount extends Action<ActionTypes.REMOVE_ACCOUNT> {
  payload: { index: number }
}

export const removeAccount: ActionCreator<IRemoveAccount> = (payload: {
  index: number
}) => ({
  payload,
  type: ActionTypes.REMOVE_ACCOUNT
})

interface IChangeVerifier extends Action<ActionTypes.CHANGE_VERIFIER> {
  payload: { verifier: string }
}

export const changeVerifier: ActionCreator<IChangeVerifier> = (payload: {
  verifier: string
}) => ({
  payload,
  type: ActionTypes.CHANGE_VERIFIER
})

export interface IState {
  users: ITwitterAccessToken[]
  verifier: string
}

export const initialState: IState = {
  users: [],
  verifier: ''
}

const reducer: Reducer<
  IState,
  IOpenAuthorize | IAddAccount | IRemoveAccount | IChangeVerifier
> = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ActionTypes.OPEN_AUTHORIZE:
        break

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
