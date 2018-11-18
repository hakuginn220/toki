import produce from 'immer'
import { Action, ActionCreator, Reducer } from 'redux'

interface IUser {
  access_token: string
  access_token_secret: string
}

interface IState {
  users: IUser[]
}

enum ActionTypes {
  OPEN_AUTHORIZE = 'OPEN_AUTHORIZE',
  ADD_ACCOUNT = 'ADD_ACCOUNT',
  REMOVE_ACCOUNT = 'REMOVE_ACCOUNT'
}

interface IOpenAuthorize extends Action<ActionTypes.OPEN_AUTHORIZE> {}

export const openAuthorize: ActionCreator<IOpenAuthorize> = () => ({
  type: ActionTypes.OPEN_AUTHORIZE
})

interface IAddAccount extends Action<ActionTypes.ADD_ACCOUNT> {
  payload: { user: IUser }
}

export const addAccount: ActionCreator<IAddAccount> = (payload: {
  user: IUser
}) => ({
  payload,
  type: ActionTypes.ADD_ACCOUNT
})

interface IRemoveAccount extends Action<ActionTypes.REMOVE_ACCOUNT> {
  payload: { index: number }
}

export const removeAccount: ActionCreator<IRemoveAccount> = payload => ({
  payload,
  type: ActionTypes.REMOVE_ACCOUNT
})

const initialState: IState = {
  users: []
}

const reducer: Reducer<
  IState,
  IOpenAuthorize | IAddAccount | IRemoveAccount
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

      default:
        break
    }
  })

export default reducer
