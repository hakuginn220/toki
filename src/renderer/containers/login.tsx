import Login, { IProps } from '@/components/templates/login'
import { addAccount, changeVerifier, openAuthorize } from '@/modules/accounts'
import { IRootState } from '@/store'
import twitter from '@/utils/twitter'
import { shell } from 'electron'
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'

interface IStateProps {
  verifier: IProps['verifier']
}

const mapStateToProps: MapStateToProps<
  IStateProps,
  RouteComponentProps,
  IRootState
> = state => ({
  verifier: state.accounts.verifier
})

interface IDispatchProps {
  onChangeVerifier: IProps['onChangeVerifier']
  onOAuth: IProps['onOAuth']
  onAuthorize: IProps['onAuthorize']
}

const mapDispatchToProps: MapDispatchToProps<
  IDispatchProps,
  RouteComponentProps
> = dispatch => ({
  onChangeVerifier(event) {
    dispatch(changeVerifier({ verifier: event.target.value }))
  },
  onOAuth(event) {
    event.preventDefault()
    twitter.getAccessToken('').then(token => {
      dispatch(addAccount({ user: token }))
    })
  },
  onAuthorize() {
    twitter.getAuthorizeURL().then(url => {
      shell.openExternal(url)
      dispatch(openAuthorize())
    })
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
