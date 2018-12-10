import produce from 'immer'
import { Action, ActionCreator, Reducer } from 'redux'

export enum ActionTypes {
  CHANGE_LOCATION = 'routes/CHANGE_LOCATION'
}

interface IChangeLocation extends Action<ActionTypes.CHANGE_LOCATION> {
  payload: { location: string }
}

export const changeLocation: ActionCreator<IChangeLocation> = (payload: {
  location: string
}) => ({
  payload,
  type: ActionTypes.CHANGE_LOCATION
})

export interface IState {
  location: string
}

export const initialState: IState = {
  location: 'home'
}

const reducer: Reducer<IState, IChangeLocation> = (
  state = initialState,
  action
) =>
  produce(state, draft => {
    switch (action.type) {
      case ActionTypes.CHANGE_LOCATION:
        draft.location = action.payload.location
        break

      default:
        break
    }
  })

export default reducer
