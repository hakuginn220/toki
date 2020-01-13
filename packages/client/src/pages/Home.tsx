import React, { useState, FC } from 'react'

const Home: FC = () => {
  const [test, setTest] = useState(1)

  function increment() {
    setTest(test + 1)
  }

  function decrement() {
    setTest(test - 1)
  }

  return (
    <>
      <h1>Hello world {test}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </>
  )
}

export default Home
