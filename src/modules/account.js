const ADD_USER = Symbol('account/ADD_USER')
const REMOVE_USER = Symbol('account/REMOVE_USER')
const SET_CURRENT_USER = Symbol('account/SET_CURRENT_USER')

const initialState = {
  users: [],
  current: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: state.user.concat(action.payload.user)
      }

    case REMOVE_USER:
      return {
        ...state,
        users: state.users.filter(
          (value, index) => index !== action.payload.index
        )
      }

    case SET_CURRENT_USER:
      return {
        ...state,
        current: action.payload.index
      }

    default:
      return state
  }
}

export const addUser = user => ({
  type: ADD_USER,
  payload: { user }
})

export const removeUser = index => ({
  type: REMOVE_USER,
  payload: { index }
})

export const setCurrentUser = index => ({
  type: SET_CURRENT_USER,
  payload: { index }
})
