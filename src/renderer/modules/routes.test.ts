import reducer, { ActionTypes, initialState } from './routes'

test('CHANGE_LOCATION', () => {
  expect(
    reducer(initialState, {
      payload: { location: 'test' },
      type: ActionTypes.CHANGE_LOCATION
    })
  ).toMatchSnapshot()
})
