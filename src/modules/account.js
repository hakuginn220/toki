const ADD_USER = Symbol('account/ADD_USER')
const DELETE_USER = Symbol('account/DELETE_USER')

const initialState = {
  users: []
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload.user]
      }
    case DELETE_USER:
      return state.users.splice(action.payload.index, 1)
    default:
      return state
  }
}

export const setUser = user => ({
  type: ADD_USER,
  payload: { user }
})

export const removeUser = index => ({
  type: DELETE_USER,
  payload: { index }
})
