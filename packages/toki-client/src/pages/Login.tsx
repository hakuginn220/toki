import React, { useState, FC, ChangeEvent, FormEvent } from 'react'
import { auth } from '../utils/api'

export const Login: FC = () => {
  const [code, setCode] = useState('')
  const [token, setToken] = useState('')
  const [secret, setSecret] = useState('')

  function changeCode(event: ChangeEvent<HTMLInputElement>): void {
    setCode(event.target.value)
  }

  function openAuthTwitter(): void {
    setCode('')

    auth.post('twitter').then(response => {
      setToken(response.data.token)
      setSecret(response.data.secret)
      open(response.data.endpoint)
    })
  }

  function getAccessToken(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault()

    const data = { code, token, secret }

    auth.post('twitter/callback', data).then(response => {
      console.log(response)

      setCode('')
    })
  }

  return (
    <>
      <h1>Login</h1>

      <button onClick={openAuthTwitter}>アカウント認証する</button>

      <form onSubmit={getAccessToken}>
        <label>
          6桁の数字を入力
          <input value={code} onChange={changeCode} />
        </label>
      </form>
    </>
  )
}
