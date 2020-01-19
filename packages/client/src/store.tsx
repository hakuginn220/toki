import { Reducer } from 'redux'

export type State = {
  count: number
}

const initialState: State = {
  count: 0
}

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

export const increment = () => ({ type: INCREMENT })
export const decrement = () => ({ type: DECREMENT })

export const reducer: Reducer<State> = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 }
    case DECREMENT:
      return { ...state, count: state.count - 1 }
    default:
      return state
  }
}
