import reducer, { ActionTypes, initialState } from './accounts'

let count = 0

const createUser = () => {
  count = count + 1

  return {
    access_token: `token code for No.${count}`,
    access_token_secret: `secret code for No.${count}`
  }
}

test('ADD_ACCOUNT', () => {
  expect(
    reducer(initialState, {
      payload: { user: createUser() },
      type: ActionTypes.ADD_ACCOUNT
    })
  ).toMatchSnapshot()
})

test('REMOVE_ACCOUNT', () => {
  let state

  for (let i = 0; i < 3; i++) {
    state = reducer(state, {
      payload: { user: createUser() },
      type: ActionTypes.ADD_ACCOUNT
    })
  }

  expect(
    reducer(state, {
      payload: { index: 1 },
      type: ActionTypes.REMOVE_ACCOUNT
    })
  ).toMatchSnapshot()
})

test('CHANGE_VERIFIER', () => {
  expect(
    reducer(initialState, {
      payload: { verifier: 'authentication code' },
      type: ActionTypes.CHANGE_VERIFIER
    })
  ).toMatchSnapshot()
})
