import { createStore, Action, ActionCreator, Reducer } from 'redux'

type Account = {
  id: string
}

type Tweet = {
  id: string
}

type State = {
  accounts: Account[]
  homeTimeline: Tweet[]
}

const initialState: State = {
  accounts: [],
  homeTimeline: []
}

const ADD_ACCOUNT = 'ADD_ACCOUNT'
const REMOVE_ACCOUNT = 'REMOVE_ACCOUNT'

interface AddAccount extends Action<typeof ADD_ACCOUNT> {
  payload: {
    account: Account
  }
}

interface RemoveAccount extends Action<typeof REMOVE_ACCOUNT> {
  payload: {
    account_id: string
  }
}

type Actions = AddAccount | RemoveAccount

export const addAccount: ActionCreator<AddAccount> = payload => {
  return { type: ADD_ACCOUNT, payload }
}

export const removeAccount: ActionCreator<RemoveAccount> = payload => {
  return { type: REMOVE_ACCOUNT, payload }
}

const reducer: Reducer<State, Actions> = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ACCOUNT:
      return {
        ...state,
        accounts: state.accounts.concat([action.payload.account])
      }

    case REMOVE_ACCOUNT:
      return {
        ...state,
        accounts: state.accounts.filter(v => v.id === action.payload.account_id)
      }

    default:
      return state
  }
}

export const store = createStore(reducer)
