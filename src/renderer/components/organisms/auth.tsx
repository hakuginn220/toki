import { Button, InputText } from '@/components/atoms/form'
import accounts from '@/stores/accounts'
import { observer } from 'mobx-react'
import React, { ChangeEvent, Component, FormEvent, MouseEvent } from 'react'

interface IState {
  verifier: string
}

@observer
export default class Auth extends Component<{}, IState> {
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
        <Button type="button" onClick={this.getAuth}>
          Login Account
        </Button>

        <form onSubmit={this.postAuth}>
          <InputText
            type="text"
            value={this.state.verifier}
            onChange={this.changeVerifier}
          />
          <Button type="submit">Add Account</Button>
        </form>
      </>
    )
  }
}
