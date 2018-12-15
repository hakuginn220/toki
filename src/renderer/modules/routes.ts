import produce from 'immer'
import { Action, Reducer } from 'redux'

export enum ActionTypes {
  CHANGE_LOCATION = 'routes/CHANGE_LOCATION'
}

export interface IChangeLocation extends Action<ActionTypes.CHANGE_LOCATION> {
  payload: { location: string }
}

export type TActions = IChangeLocation

export function changeLocation(location: string): IChangeLocation {
  return { payload: { location }, type: ActionTypes.CHANGE_LOCATION }
}

export interface IState {
  location: string
}

export const initialState: IState = {
  location: 'home'
}

const reducer: Reducer<IState, TActions> = (state = initialState, action) =>
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
