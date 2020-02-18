import React, { FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { HomeTimeline } from '../containers/HomeTimeline'
import { State, increment, decrement } from '../store'

export const Home: FC = () => {
  const count = useSelector<State>(state => state.count)
  const dispatch = useDispatch()

  const inc = (): void => {
    dispatch(increment())
  }

  const dec = (): void => {
    dispatch(decrement())
  }

  return (
    <>
      <h1>Hello world: {count}</h1>
      <button onClick={inc}>increment</button>
      <button onClick={dec}>decrement</button>
      <HomeTimeline />
    </>
  )
}
