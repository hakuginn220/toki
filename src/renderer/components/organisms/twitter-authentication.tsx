import Button from '@/components/atoms/button'
import InputButton from '@/components/molecules/input-button'
import accounts from '@/stores/accounts'
import React, { ChangeEvent, Component, FormEvent, MouseEvent } from 'react'

interface IState {
  verifier: string
}

export default class TwitterAuthentication extends Component<{}, IState> {
  public state = { verifier: '' }

  public getAuth = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    accounts.openAuthorize()
  }

  public changeVerifier = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ verifier: event.target.value })
  }

  public postAuth = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    accounts.addAccount(this.state.verifier)
  }

  public render() {
    return (
      <>
        <Button onClick={this.getAuth}>Login Account</Button>

        <InputButton
          value={this.state.verifier}
          onChange={this.changeVerifier}
          onSubmit={this.postAuth}
        />
      </>
    )
  }
}
