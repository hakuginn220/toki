import React, { FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { State, increment, decrement } from '../store'

const Home: FC = () => {
  const count = useSelector<State>(state => state.count)
  const dispatch = useDispatch()

  return (
    <>
      <h1>Hello world {count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </>
  )
}

export default Home
